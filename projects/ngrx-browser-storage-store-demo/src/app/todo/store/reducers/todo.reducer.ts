import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import { ITodo } from '../models/todo.interfaces';

export const todoFeatureKey = 'todo';

export function sortTodosById(a: ITodo, b: ITodo): number {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  return 0;
}

export const todoAdapter: EntityAdapter<ITodo> = createEntityAdapter<ITodo>({
  sortComparer: sortTodosById,
});

export interface ITodoState extends EntityState<ITodo> {}

export const reducer = createReducer(
  todoAdapter.getInitialState(),
  on(TodoActions.addTodo, (state, { todo }) => {
    return todoAdapter.addOne(todo, state);
  }),
  on(TodoActions.removeTodo, (state, { id }) => {
    return todoAdapter.removeOne(id, state);
  }),
  on(TodoActions.setCompleted, (state, todo) => {
    return todoAdapter.updateOne(
      { id: todo.id, changes: { completed: todo.completed } },
      state
    );
  })
);
