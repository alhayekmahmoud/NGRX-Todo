import { createAction, props } from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http"
import { ITodo } from "../models/todo";

export const fetchToDoStart = createAction("[todo/fetchToDoStart]");
export const fetchToDoSuccess = createAction("[todo/fetchToDoSuccess]",props<{response: ITodo[]}>());
export const fetchToDoError = createAction("[todo/fetchToDoError]",props<{error:HttpErrorResponse}>());
export const selectTodo= createAction("[todo/selectTodo]",props<{id:number}>());