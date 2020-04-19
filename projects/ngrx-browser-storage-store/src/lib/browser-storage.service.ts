import { Inject, Injectable } from '@angular/core';
import {
  BrowserStorage,
  NBSS_DEFAULT_BROWSER_STORAGE,
} from './browser-storage.config';
import { Optional } from './helpers';
import { _NBSS_BROWSER_STORAGE, _NBSS_FEATURE_NAME } from './tokens';

const STATE_PREFIX = 'app-state';

@Injectable()
export class BrowserStorageService {
  private storage: Storage;

  initialStateLoaded: boolean;

  constructor(
    @Inject(_NBSS_BROWSER_STORAGE) storage: Optional<BrowserStorage>,
    @Inject(_NBSS_FEATURE_NAME) private feature: Optional<string>
  ) {
    this.storage = this.getStorage(storage);
  }

  loadInitialState(): any {
    const key = this.getStorageKey(this.feature);
    const item = this.storage.getItem(key);
    if (item) {
      this.initialStateLoaded = true;
      return JSON.parse(item);
    }

    return {};
  }

  set(value: any) {
    const key = this.getStorageKey(this.feature);
    this.storage.setItem(key, JSON.stringify(value));
  }

  private getStorageKey(feature: Optional<string>): string {
    if (feature) {
      return `${STATE_PREFIX}-${feature}`;
    }

    return STATE_PREFIX;
  }

  private getStorage(configStorage: Optional<BrowserStorage>): Storage {
    const cfgStorage = configStorage || NBSS_DEFAULT_BROWSER_STORAGE;
    switch (cfgStorage) {
      case BrowserStorage.SessionStorage:
        return sessionStorage;
      case BrowserStorage.LocalStorage:
        return localStorage;
    }
  }
}
