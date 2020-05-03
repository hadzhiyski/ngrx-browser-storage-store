import { TestBed } from '@angular/core/testing';
import { createAction, createReducer, INIT, on, UPDATE } from '@ngrx/store';
import { BrowserStorageMetaReducerLoader } from './browser-storage-meta-reducer-loader';
import { BrowserStorage } from './browser-storage.config';
import { BrowserStorageService } from './browser-storage.service';
import { _NBSS_BROWSER_STORAGE, _NBSS_FEATURE_NAME } from './tokens';

interface IState {
  count: number;
}

describe('BrowserStorageMetaReducerLoader', () => {
  [
    {
      cfg: { storage: BrowserStorage.LocalStorage, feature: undefined },
      storage: localStorage,
    },
    {
      cfg: { storage: BrowserStorage.LocalStorage, feature: 'test42' },
      storage: localStorage,
    },
    {
      cfg: { storage: BrowserStorage.SessionStorage, feature: undefined },
      storage: sessionStorage,
    },
    {
      cfg: { storage: BrowserStorage.SessionStorage, feature: 'test42' },
      storage: sessionStorage,
    },
  ].map((test) => {
    it(`should load from storage on ngrx/INIT once Storage: ${
      test.cfg.storage
    } Feature: ${test.cfg.feature || 'undefined'}`, () => {
      const addAction = createAction('[Counter] Add');
      const subtractAction = createAction('[Counter] Subtract');

      const countReducer = createReducer<IState>(
        {
          count: 0,
        },
        on(addAction, (state) => ({
          ...state,
          count: state.count + 1,
        })),
        on(subtractAction, (state) => ({
          ...state,
          count: state.count - 1,
        }))
      );

      TestBed.configureTestingModule({
        providers: [
          BrowserStorageMetaReducerLoader,
          BrowserStorageService,
          {
            provide: _NBSS_FEATURE_NAME,
            useValue: test.cfg.feature,
          },
          {
            provide: _NBSS_BROWSER_STORAGE,
            useValue: test.cfg.storage,
          },
        ],
      });

      spyOn(test.storage, 'getItem').and.returnValue('{"count": 7}');

      const service = TestBed.inject(BrowserStorageMetaReducerLoader);
      const storageService = TestBed.inject(BrowserStorageService);
      const loadInitialStateSpy = spyOn(storageService, 'loadInitialState');
      loadInitialStateSpy.and.callThrough();
      const metaReducer = service.get<IState>();
      const meta = metaReducer(countReducer);

      meta(undefined, { type: INIT });
      meta(undefined, { type: UPDATE });
      meta(undefined, { type: INIT });
      meta(undefined, { type: UPDATE });

      expect(loadInitialStateSpy).toHaveBeenCalledTimes(2);
    });
  });

  [
    {
      cfg: { storage: BrowserStorage.LocalStorage, feature: undefined },
      storage: localStorage,
    },
    {
      cfg: { storage: BrowserStorage.LocalStorage, feature: 'test42' },
      storage: localStorage,
    },
    {
      cfg: { storage: BrowserStorage.SessionStorage, feature: undefined },
      storage: sessionStorage,
    },
    {
      cfg: { storage: BrowserStorage.SessionStorage, feature: 'test42' },
      storage: sessionStorage,
    },
  ].map((test) => {
    it(`should return new state once initial state is loaded. Storage: ${
      test.cfg.storage
    } Feature: ${test.cfg.feature || 'undefined'}`, () => {
      const addAction = createAction('[Counter] Add');
      const subtractAction = createAction('[Counter] Subtract');

      const countReducer = createReducer<IState>(
        {
          count: 0,
        },
        on(addAction, (state) => ({
          ...state,
          count: state.count + 1,
        })),
        on(subtractAction, (state) => ({
          ...state,
          count: state.count - 1,
        }))
      );

      TestBed.configureTestingModule({
        providers: [
          BrowserStorageMetaReducerLoader,
          BrowserStorageService,
          {
            provide: _NBSS_FEATURE_NAME,
            useValue: test.cfg.feature,
          },
          {
            provide: _NBSS_BROWSER_STORAGE,
            useValue: test.cfg.storage,
          },
        ],
      });

      spyOn(test.storage, 'getItem').and.returnValue('{"count": 7}');

      const service = TestBed.inject(BrowserStorageMetaReducerLoader);
      const storageService = TestBed.inject(BrowserStorageService);
      const loadInitialStateSpy = spyOn(storageService, 'loadInitialState');
      loadInitialStateSpy.and.callThrough();
      const metaReducer = service.get<IState>();
      const meta = metaReducer(countReducer);

      meta(undefined, { type: INIT });
      meta(undefined, { type: UPDATE });

      expect(loadInitialStateSpy).toHaveBeenCalledTimes(1);

      let newState = meta({ count: 1 }, addAction);
      expect(newState.count).toBe(2);

      newState = meta(newState, addAction);
      expect(newState.count).toBe(3);

      newState = meta(newState, subtractAction);
      expect(newState.count).toBe(2);
    });
  });
});
