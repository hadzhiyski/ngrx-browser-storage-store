import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from '../reducers/todo.reducer';
import { todoAdapter } from '../reducers/todo.reducer';

const { selectAll } = todoAdapter.getSelectors();

export const selectTodoState = createFeatureSelector<fromTodo.ITodoState>(
  fromTodo.todoFeatureKey
);

export const selectAllTodos = createSelector(selectTodoState, selectAll);
