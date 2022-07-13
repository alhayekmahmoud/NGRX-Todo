import * as fromTodo from './todo.reucers';
import * as fromAPI  from './api.reducer';
import {Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';
import {adapter} from './todo.reucers';



export interface TodoState{
    todo: fromTodo.State,
    api: fromAPI.State
}

export function reducers(state:TodoState,action:Action):any{
    return combineReducers({
        todo:fromTodo.reducer,
        api:fromAPI.reducer
    })(state,action)
}

const featureSelector = createFeatureSelector<TodoState>("todo");


const todoSelector = createSelector(featureSelector, x=>x.todo);
const apiSelector = createSelector(featureSelector,x=>x.api);

const{selectAll, selectEntities, selectIds, selectTotal}= fromTodo.adapter.getSelectors(todoSelector);

export const todoEntities = selectAll;

export const getSelectId = createSelector(
    todoSelector,
    fromTodo.selectId
)

export const getSelectedTodoIdEntity = createSelector(

    todoEntities,
    getSelectId,
    (entities,id)=>id && entities[id]

)
export const getIsloading = createSelector(
    apiSelector,
    fromAPI.isloading
)
export const getApiError = createSelector(
    apiSelector,
    fromAPI.error
)
