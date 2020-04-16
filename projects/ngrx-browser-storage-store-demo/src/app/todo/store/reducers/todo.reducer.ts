import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';

export const todoFeatureKey = 'todo';

export interface ITodoState {

}

export const initialState: ITodoState = {

};


export const reducer = createReducer(
  initialState,

  on(TodoActions.loadTodos, state => state),

);

