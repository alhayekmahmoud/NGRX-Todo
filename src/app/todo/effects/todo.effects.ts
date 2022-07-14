import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { todoActions } from "../actions";
import { TodoService } from "../services/todo.service";
import { of } from "rxjs";

@Injectable()
export class TodoEffects{
    constructor(private todoservice:TodoService, private action$:Actions){}

    fetchTodo$ = createEffect(()=>this.action$.pipe(
        ofType(todoActions.fetchToDoStart),
        exhaustMap(()=>{
            return this.todoservice.getTodos().pipe(
                map((response)=>todoActions.fetchToDoSuccess({response})),
                catchError((error)=>of(todoActions.fetchToDoError({error})))
            )
        })
        
    ))

    afterFetchTodo$ = createEffect(()=>this.action$.pipe(
        ofType(todoActions.fetchToDoSuccess),
        tap(({response})=>console.log(response))),
        {dispatch:false})

}