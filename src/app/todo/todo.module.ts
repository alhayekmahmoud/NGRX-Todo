import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { TodoEffects } from "./effects/todo.effects";
import { reducers } from "./reducers";
import { todoRouting } from "./todo.routing";
import { TodoComponent } from "./components/todo.component";

@NgModule({
    declarations:[TodoComponent],
    imports:[
        CommonModule,
        StoreModule.forFeature('todo',reducers),
        EffectsModule.forFeature([TodoEffects]),
        todoRouting
    ]
})

export class TodoModule{}