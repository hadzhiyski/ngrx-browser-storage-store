import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { createFeatureSelector } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { BrowserStorage } from './browser-storage.config';
import { BrowserStorageEffects } from './browser-storage.effects';
import { BrowserStorageService } from './browser-storage.service';
import { _NBSS_BROWSER_STORAGE, _NBSS_FEATURE_NAME } from './tokens';

interface IState {
  count: number;
}

describe('BrowserStorageEffects', () => {
  [
    { cfg: { storage: BrowserStorage.LocalStorage, feature: 'test42' } },
    { cfg: { storage: BrowserStorage.SessionStorage, feature: 'test42' } },
  ].map((test) => {
    it(`should save state to storage for feature Storage: ${test.cfg.storage}`, () => {
      const actions = [
        { type: 'test action' },
        { type: 'test 2' },
        { type: 'test 3' },
      ];
      const actions$ = of(...actions);
      const selectStateSelector = createFeatureSelector<IState>(
        test.cfg.feature
      );
      const latestState: IState = {
        count: 100,
      };

      TestBed.configureTestingModule({
        providers: [
          BrowserStorageEffects,
          BrowserStorageService,
          provideMockActions(() => actions$),
          // mock the Store and the selectors that are used within the Effect
          provideMockStore<IState>({
            selectors: [
              {
                selector: selectStateSelector,
                value: latestState,
              },
            ],
            initialState: {
              count: 42,
            },
          }),
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

      const effects = TestBed.inject<BrowserStorageEffects<IState>>(
        BrowserStorageEffects
      );
      const storageServiceSpy = spyOn(
        TestBed.inject<BrowserStorageService>(BrowserStorageService),
        'set'
      );

      effects
        .saveForFeature(new Actions(actions$), selectStateSelector)
        .subscribe();

      expect(storageServiceSpy).toHaveBeenCalledTimes(actions.length);
      expect(storageServiceSpy).toHaveBeenCalledWith(latestState);
    });
  });

  [
    { cfg: { storage: BrowserStorage.LocalStorage } },
    { cfg: { storage: BrowserStorage.SessionStorage } },
  ].map((test) => {
    it(`should save state to storage for root Storage: ${test.cfg.storage}`, () => {
      const actions = [
        { type: 'test action' },
        { type: 'test 2' },
        { type: 'test 3' },
      ];
      const actions$ = of(...actions);
      const latestState: IState = {
        count: 100,
      };

      TestBed.configureTestingModule({
        providers: [
          BrowserStorageEffects,
          BrowserStorageService,
          provideMockActions(() => actions$),
          // mock the Store and the selectors that are used within the Effect
          provideMockStore<IState>({
            initialState: latestState,
          }),
          {
            provide: _NBSS_FEATURE_NAME,
            useValue: undefined,
          },
          {
            provide: _NBSS_BROWSER_STORAGE,
            useValue: test.cfg.storage,
          },
        ],
      });

      const effects = TestBed.inject<BrowserStorageEffects<IState>>(
        BrowserStorageEffects
      );
      const storageServiceSpy = spyOn(
        TestBed.inject<BrowserStorageService>(BrowserStorageService),
        'set'
      );

      effects.saveForRoot(new Actions(actions$)).subscribe();

      expect(storageServiceSpy).toHaveBeenCalledTimes(actions.length);
      expect(storageServiceSpy).toHaveBeenCalledWith(latestState);
    });
  });
});
