import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { BrowserStorageEffects } from 'ngrx-browser-storage-store';
import { ICounterState } from '../reducers/counter.reducer';
import { selectCounterState } from '../selectors/counter.selectors';

@Injectable()
export class CounterEffects {
  saveToLocalStorage$ = this.browserStorageEffects.saveForFeature(
    this.actions$,
    selectCounterState
  );

  constructor(
    private actions$: Actions,
    private browserStorageEffects: BrowserStorageEffects<ICounterState>
  ) {}
}
