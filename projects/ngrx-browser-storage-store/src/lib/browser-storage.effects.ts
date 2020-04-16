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
import { BrowserStorageCache } from './browser-storage-cache';

@Injectable()
export class BrowserStorageEffects<TState> {
  constructor(
    private cache: BrowserStorageCache,
    private store: Store<TState>
  ) {}

  saveForFeature(
    actions$: Actions,
    featureName: string,
    featureSelector: MemoizedSelector<
      TState,
      TState,
      DefaultProjectorFn<TState>
    >
  ): Observable<[Action, TState]> & CreateEffectMetadata {
    const storageService = this.cache.get(featureName);

    return createEffect(
      () =>
        actions$.pipe(
          withLatestFrom(this.store.pipe(select(featureSelector))),
          tap(([action, state]) => storageService.set(featureName, state))
        ),
      { dispatch: false }
    );
  }

  saveForRoot(
    actions$: Actions
  ): Observable<[Action, TState]> & CreateEffectMetadata {
    const storageService = this.cache.getRoot();

    return createEffect(
      () =>
        actions$.pipe(
          withLatestFrom(this.store),
          tap(([action, state]) => storageService.set(undefined, state))
        ),
      { dispatch: false }
    );
  }
}
