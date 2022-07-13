import { state } from "@angular/animations";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, select } from "@ngrx/store";
import { todoActions } from "../actions";
//import { State } from "@ngrx/store";
import { ITodo } from "../models/todo";

export interface State extends EntityState<ITodo>{
    selectedTodoId:number | undefined;
}

export const adapter: EntityAdapter<ITodo> = createEntityAdapter<ITodo>({
    selectId:x=>x.id,
    sortComparer:false
})

export const initialState: State = adapter.getInitialState({
    selectedTodoId : undefined
})
export const reducer = createReducer(initialState, 
    on(todoActions.fetchToDoSuccess, (state,{ response})=>{
        return adapter.setAll(response,state);
    }),
    on(todoActions.selectTodo,(state,{id})=>{
        return{
            ...state,
            selectedTodoId:id
        }
    })
)

export const selectId = (state:State)=> state.selectedTodoId;