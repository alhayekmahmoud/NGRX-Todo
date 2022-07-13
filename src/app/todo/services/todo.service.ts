import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITodo } from "../models/todo";

@Injectable({providedIn:'root'})
export class TodoService{
    url='https://jsonplaceholder.typicode.com/todos';
    constructor(private client:HttpClient){}
    
        /**
         * getTodos
         */
        public getTodos(): Observable<ITodo[]> {
            return this.client.get<ITodo[]>(this.url)
            
        }
    
}