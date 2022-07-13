import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo/components/todo.component";

const routes:Routes=[{

    path:'', pathMatch:'full',redirectTo:'todo'},
    {
        path:'todo',
        loadChildren:()=>import('./todo/todo.module').then((x)=>x.TodoModule)
    }

]
@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouting{}