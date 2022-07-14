import { state } from "@angular/animations";
import { HttpErrorResponse } from "@angular/common/http";
import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { todoActions } from "../actions";

export interface State{
    isloading:boolean |undefined;
    error: HttpErrorResponse | undefined;
}
export const initialState : State={
    isloading : undefined,
    error:undefined
}

export const reducer=createReducer(initialState,
    on(todoActions.fetchToDoStart,(state,action)=>{
        return{
            ...state,
            isloading:true
        }
    }),
    on(todoActions.fetchToDoError,(state,{error})=>{
        return{
            ...state,
            isloading:false,
            error
                        
        }
    }),
    on(todoActions.fetchToDoSuccess,(state)=>{
        return{
            ...state,
            isloading:false,
            error:undefined
                        
        }
    })
)

export const isloading = (state:State)=>state.isloading;
export const error = (state:State)=>state.error;