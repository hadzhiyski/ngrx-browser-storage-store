import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { BrowserStorageEffects } from 'ngrx-browser-storage-store';
import { ITodoState } from '../reducers/todo.reducer';
import { selectTodoState } from '../selectors/todo.selectors';

@Injectable()
export class TodoEffects {
  saveToLocalStorage$ = this.browserStorageEffects.saveForFeature(
    this.actions$,
    selectTodoState
  );

  constructor(
    private actions$: Actions,
    private browserStorageEffects: BrowserStorageEffects<ITodoState>
  ) {}
}
