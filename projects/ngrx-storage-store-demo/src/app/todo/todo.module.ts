import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StateLocalStorageLoader } from 'ngrx-storage-store';
import { TodoIndexComponent } from './components/todo-index/todo-index.component';
import { TodoEffects } from './store/effects/todo.effects';
import * as fromTodo from './store/reducers/todo.reducer';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [TodoIndexComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer, {
      metaReducers: [
        StateLocalStorageLoader.forFeature<fromTodo.ITodoState>(
          fromTodo.todoFeatureKey
        ),
      ],
    }),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoModule {}
