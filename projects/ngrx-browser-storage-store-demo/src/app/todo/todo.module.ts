import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreConfig, StoreModule } from '@ngrx/store';
import {
  BrowserStorage,
  BrowserStorageMetaReducerLoader,
  BrowserStorageModule,
} from 'ngrx-browser-storage-store';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoIndexComponent } from './components/todo-index/todo-index.component';
import { TodoEffects } from './store/effects/todo.effects';
import * as fromTodo from './store/reducers/todo.reducer';
import { TodoRoutingModule } from './todo-routing.module';

export const TODO_FEATURE_CONFIG = new InjectionToken<
  StoreConfig<fromTodo.ITodoState>
>('Counter Feature Config');

export function getTodoFeatureConfig(
  bsLoader: BrowserStorageMetaReducerLoader
): StoreConfig<fromTodo.ITodoState> {
  return {
    metaReducers: [bsLoader.get<fromTodo.ITodoState>()],
  };
}

@NgModule({
  declarations: [TodoIndexComponent, AddTodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,

    FontAwesomeModule,

    TodoRoutingModule,

    BrowserStorageModule.forFeature(fromTodo.todoFeatureKey, {
      storage: BrowserStorage.LocalStorage,
    }),
    StoreModule.forFeature<fromTodo.ITodoState>(
      fromTodo.todoFeatureKey,
      fromTodo.reducer,
      TODO_FEATURE_CONFIG
    ),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [
    {
      provide: TODO_FEATURE_CONFIG,
      deps: [BrowserStorageMetaReducerLoader],
      useFactory: getTodoFeatureConfig,
    },
  ],
})
export class TodoModule {}
