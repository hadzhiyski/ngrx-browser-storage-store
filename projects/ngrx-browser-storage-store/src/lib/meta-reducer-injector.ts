import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { AppInjectorRef } from './app-injector-ref';
import { BrowserStorageCache } from './browser-storage-cache';
import { Injectable } from '@angular/core';

@Injectable()
export class MetaReducerInjector {
  forFeature<TState>(feature: string) {
    return (reducer: ActionReducer<TState>): ActionReducer<TState> => {
      return (state, action) => {
        const newState = reducer(state, action);
        if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
          const cache = AppInjectorRef.get(BrowserStorageCache);
          const service = cache.get(feature);
          return {
            ...newState,
            ...service.loadInitialState(feature),
          };
        }
        return newState;
      };
    };
  }

  forRoot<TState>() {
    return (reducer: ActionReducer<TState>): ActionReducer<TState> => {
      return (state, action) => {
        const newState = reducer(state, action);
        if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
          const cache = AppInjectorRef.get(BrowserStorageCache);
          const service = cache.getRoot();
          return {
            ...newState,
            ...service.loadInitialState(),
          };
        }
        return newState;
      };
    };
  }
}
