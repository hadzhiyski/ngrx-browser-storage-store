import { createAction, props } from '@ngrx/store';
import { ITodo } from '../models/todo.interfaces';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{todo: ITodo}>()
);

export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{id: number}>()
);

export const setCompleted = createAction(
  '[Todo] Toggle Completed',
  props<{id: number; completed: boolean}>()
);
