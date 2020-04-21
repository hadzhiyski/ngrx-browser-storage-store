import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Props } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { BrowserStorageService } from './browser-storage.service';

@Injectable()
export class BrowserStorageEffects<TState> {
  constructor(
    private browserStorageService: BrowserStorageService,
    private store: Store<TState>
  ) {}

  saveForFeature(
    actions$: Actions,
    featureSelector: (state: TState, props: Props<TState>) => TState,
    props?: Props<TState>
  ): Observable<TState> & CreateEffectMetadata {
    return createEffect(
      () =>
        actions$.pipe(
          withLatestFrom(this.store.pipe(select(featureSelector, props))),
          map(([action, state]) => state),
          tap((state) => this.browserStorageService.set(state))
        ),
      { dispatch: false }
    );
  }

  saveForRoot(actions$: Actions): Observable<TState> & CreateEffectMetadata {
    return createEffect(
      () =>
        actions$.pipe(
          withLatestFrom(this.store),
          map(([action, state]) => state),
          tap((state) => this.browserStorageService.set(state))
        ),
      { dispatch: false }
    );
  }
}
