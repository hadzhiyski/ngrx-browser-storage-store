import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { LocalStorageEffects } from 'ngrx-storage-store';
import { ITodoState, todoFeatureKey } from '../reducers/todo.reducer';
import { selectTodoState } from '../selectors/todo.selectors';

@Injectable()
export class TodoEffects {
  saveToLocalStorage$ = this.localStorageEffects.saveForFeature(
    this.actions$,
    todoFeatureKey,
    selectTodoState
  );

  constructor(
    private actions$: Actions,
    private localStorageEffects: LocalStorageEffects<ITodoState>
  ) {}
}
