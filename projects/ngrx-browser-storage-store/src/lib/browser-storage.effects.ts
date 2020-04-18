import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata } from '@ngrx/effects';
import {
  Action,
  DefaultProjectorFn,
  MemoizedSelector,
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';
import { BrowserStorageService } from './browser-storage.service';

@Injectable()
export class BrowserStorageEffects<TState> {
  constructor(
    private browserStorageService: BrowserStorageService,
    private store: Store<TState>
  ) {}

  saveForFeature(
    actions$: Actions,
    featureSelector: MemoizedSelector<
      TState,
      TState,
      DefaultProjectorFn<TState>
    >
  ): Observable<[Action, TState]> & CreateEffectMetadata {
    return createEffect(
      () =>
        actions$.pipe(
          withLatestFrom(this.store.pipe(select(featureSelector))),
          tap(([action, state]) => this.browserStorageService.set(state))
        ),
      { dispatch: false }
    );
  }

  saveForRoot(
    actions$: Actions
  ): Observable<[Action, TState]> & CreateEffectMetadata {
    return createEffect(
      () =>
        actions$.pipe(
          withLatestFrom(this.store),
          tap(([action, state]) => this.browserStorageService.set(state))
        ),
      { dispatch: false }
    );
  }
}
