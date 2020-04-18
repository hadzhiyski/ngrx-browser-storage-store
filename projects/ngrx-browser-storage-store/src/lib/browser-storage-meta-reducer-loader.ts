import { Injectable } from '@angular/core';
import { Action, ActionReducer, INIT, MetaReducer, UPDATE } from '@ngrx/store';
import { BrowserStorageService } from './browser-storage.service';

@Injectable()
export class BrowserStorageMetaReducerLoader {
  constructor(private browserStorageService: BrowserStorageService) {}

  get<TState>(): MetaReducer<TState, Action> {
    return (reducer: ActionReducer<TState>): ActionReducer<TState> => {
      return (state, action) => {
        const newState = reducer(state, action);
        if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
          return {
            ...newState,
            ...this.browserStorageService.loadInitialState(),
          };
        }
        return newState;
      };
    };
  }
}
