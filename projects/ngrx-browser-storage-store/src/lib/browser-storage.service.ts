import { Inject, Injectable } from '@angular/core';
import {
  BrowserStorage,
  NBSS_DEFAULT_BROWSER_STORAGE,
} from './browser-storage.config';
import { Optional } from './helpers';
import { _NBSS_BROWSER_STORAGE, _NBSS_FEATURE_NAME } from './tokens';

@Injectable()
export class BrowserStorageService {
  private readonly STATE_PREFIX = 'app-state';
  private storage: Storage;

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
      return JSON.parse(item);
    }

    return {};
  }

  set(value: any) {
    if (!value) {
      throw new Error('Value can not be falsy.');
    }
    const key = this.getStorageKey(this.feature);
    this.storage.setItem(key, JSON.stringify(value));
  }

  private getStorageKey(feature: Optional<string>): string {
    if (feature) {
      return `${this.STATE_PREFIX}-${feature}`;
    }

    return this.STATE_PREFIX;
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
