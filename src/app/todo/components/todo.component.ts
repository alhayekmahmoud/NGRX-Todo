import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { select} from "@ngrx/store";
import { Store} from "@ngrx/store";


import { Observable } from "rxjs";
import { todoActions } from "../actions";
import { ITodo } from "../models/todo";
import { getIsloading, getApiError,todoEntities, TodoState } from "../reducers";
import { isloading } from "../reducers/api.reducer";

@Component({
    selector:'todo-page',
    templateUrl:'../templates/todo.template.html',
})
export class TodoComponent{
    entities$:Observable<ITodo[]>;
    isloading$:Observable<boolean | undefined>;
    apiError$:Observable<HttpErrorResponse | undefined>;

    constructor(private store:Store<TodoState>){
        this.store.dispatch(todoActions.fetchToDoStart());
        this.entities$ = this.store.pipe(select(todoEntities));
        this.isloading$ = this.store.pipe(select(getIsloading));
        this.apiError$= this.store.pipe(select(getApiError))
    }

}