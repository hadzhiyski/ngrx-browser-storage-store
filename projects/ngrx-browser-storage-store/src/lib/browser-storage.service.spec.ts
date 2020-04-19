import { BrowserStorageService } from './browser-storage.service';
import {
  BrowserStorage,
  NBSS_DEFAULT_BROWSER_STORAGE,
} from './browser-storage.config';
import { Optional } from './helpers';

describe('BrowserStorageService', () => {
  it('should be created with parameters default values', () => {
    const service = new BrowserStorageService(undefined, undefined);

    expect(service).toBeTruthy();
  });

  [
    { storage: undefined, feature: undefined },
    { storage: undefined, feature: 'test' },
  ].map((test) => {
    it(`should use localStorage when storage options are not provided regarding of feature. storage: feature: ${
      test.feature || 'undefined'
    }`, () => {
      const ls = Object.getPrototypeOf(localStorage);
      const getItemSpy = spyOn(ls, 'getItem');

      const service = new BrowserStorageService(test.storage, test.feature);
      const state = service.loadInitialState();

      const key = `app-state${test.feature ? `-${test.feature}` : ''}`;

      expect(getItemSpy).toHaveBeenCalledWith(key);
      expect(service.initialStateLoaded).toBeFalse();
      expect(state).toEqual({});
    });
  });

  [
    {
      cfg: BrowserStorage.LocalStorage,
      storage: localStorage,
      storageName: 'localStorage',
    },
    {
      cfg: BrowserStorage.SessionStorage,
      storage: sessionStorage,
      storageName: 'sessionStorage',
    },
    { cfg: undefined, storage: localStorage, storageName: 'localStorage' },
  ].map((test) => {
    it(`should use the correct storage depending on the storage option value: ${
      test.cfg || 'DEFAULT'
    } => ${test.storageName}`, () => {
      const ls = Object.getPrototypeOf(test.storage);
      const getItemSpy = spyOn(ls, 'getItem');

      const service = new BrowserStorageService(test.cfg, undefined);
      const state = service.loadInitialState();

      const key = 'app-state';

      expect(getItemSpy).toHaveBeenCalledWith(key);
      expect(service.initialStateLoaded).toBeFalse();
      expect(state).toEqual({});
    });
  });

  [
    {
      cfg: { storage: BrowserStorage.LocalStorage, feature: undefined },
      storage: localStorage,
      key: 'app-state',
      data: '{"count": 0}',
    },
    {
      cfg: { storage: BrowserStorage.LocalStorage, feature: 'test' },
      storage: localStorage,
      key: 'app-state-test',
      data: '{"count": 0}',
    },
    {
      cfg: { storage: BrowserStorage.SessionStorage, feature: undefined },
      storage: sessionStorage,
      key: 'app-state',
      data: '{"count": 0}',
    },
    {
      cfg: { storage: BrowserStorage.SessionStorage, feature: 'test' },
      storage: sessionStorage,
      key: 'app-state-test',
      data: '{"count": 0}',
    },
  ].map((test) => {
    it(`should parse json from storage. Storage: ${test.cfg.storage} Feature: ${
      test.cfg.feature || 'undefined'
    }`, () => {
      const getItemSpy = spyOn(test.storage, 'getItem');
      getItemSpy.and.returnValue(test.data);
      const parseSpy = spyOn(JSON, 'parse');

      const service = new BrowserStorageService(
        test.cfg.storage,
        test.cfg.feature
      );
      const state = service.loadInitialState();

      expect(getItemSpy).toHaveBeenCalledTimes(1);
      expect(getItemSpy).toHaveBeenCalledWith(test.key);
      expect(parseSpy).toHaveBeenCalledTimes(1);
      expect(state).toEqual(JSON.parse(test.data));
      expect(service.initialStateLoaded).toBeTrue();
    });
  });

  [
    {
      cfg: {
        storage: BrowserStorage.LocalStorage,
        feature: undefined,
        key: 'app-state',
      },
      data: {
        test: 1,
        str: 'test',
      },
      storage: localStorage,
    },
    {
      cfg: {
        storage: BrowserStorage.LocalStorage,
        feature: 'test42',
        key: 'app-state-test42',
      },
      data: {
        test: 1,
        str: 'test',
        obj: { x: 1 },
      },
      storage: localStorage,
    },
    {
      cfg: {
        storage: BrowserStorage.SessionStorage,
        feature: undefined,
        key: 'app-state',
      },
      data: {
        test: 1,
        str: 'test',
      },
      storage: sessionStorage,
    },
    {
      cfg: {
        storage: BrowserStorage.SessionStorage,
        feature: 'test42',
        key: 'app-state-test42',
      },
      data: {
        test: 1,
        str: 'test',
        obj: { x: 1 },
      },
      storage: sessionStorage,
    },
  ].map((test) => {
    it(`should set data to storage Storage: ${test.cfg.storage} Feature: ${test.cfg.feature}`, () => {
      const setItemSpy = spyOn(test.storage, 'setItem');
      const service = new BrowserStorageService(
        test.cfg.storage,
        test.cfg.feature
      );
      service.set(test.data);

      expect(setItemSpy).toHaveBeenCalledTimes(1);
      expect(setItemSpy).toHaveBeenCalledWith(
        test.cfg.key,
        JSON.stringify(test.data)
      );
    });
  });

  [
    {
      cfg: {
        storage: BrowserStorage.LocalStorage,
        feature: undefined,
        key: 'app-state',
      },
      data: undefined,
      storage: localStorage,
    },
    {
      cfg: {
        storage: BrowserStorage.LocalStorage,
        feature: 'test42',
        key: 'app-state-test42',
      },
      data: null,
      storage: localStorage,
    },
    {
      cfg: {
        storage: BrowserStorage.SessionStorage,
        feature: undefined,
        key: 'app-state',
      },
      data: undefined,
      storage: sessionStorage,
    },
    {
      cfg: {
        storage: BrowserStorage.SessionStorage,
        feature: 'test42',
        key: 'app-state-test42',
      },
      data: null,
      storage: sessionStorage,
    },
  ].map((test) => {
    it(`should throw error if we set falsy value Storage: ${test.cfg.storage} Feature: ${test.cfg.feature}`, () => {
      const setItemSpy = spyOn(test.storage, 'setItem');
      const service = new BrowserStorageService(
        test.cfg.storage,
        test.cfg.feature
      );
      expect(() => service.set(test.data)).toThrowError('Value can not be falsy.');
    });
  });
});
