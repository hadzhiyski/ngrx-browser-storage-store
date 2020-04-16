import {
  BrowserStorage,
  IBrowserStorageOptions,
  NSS_DEFAULT_STORAGE_OPTIONS,
} from './browser-storage-options';

const STATE_PREFIX = 'state';

export class BrowserStorageService {
  private storage: Storage;
  private options: IBrowserStorageOptions;

  private constructor(
    options: IBrowserStorageOptions,
    globalOptions: IBrowserStorageOptions
  ) {
    this.options = Object.assign(
      {},
      NSS_DEFAULT_STORAGE_OPTIONS,
      globalOptions,
      options
    );
    this.storage = this.getStorage();
  }

  static create(
    options: IBrowserStorageOptions,
    globalOptions: IBrowserStorageOptions
  ): BrowserStorageService {
    return new BrowserStorageService(options, globalOptions);
  }

  loadInitialState(feature?: string): any {
    const key = this.getStorageKey(feature, this.options.appPrefix);
    const item = this.storage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }

    return {};
  }

  set(feature: string | undefined, value: any) {
    const key = this.getStorageKey(feature, this.options.appPrefix);
    this.storage.setItem(key, JSON.stringify(value));
  }

  private getStorageKey(
    feature: string | undefined,
    appPrefix: string
  ): string {
    let key = `${appPrefix}-${STATE_PREFIX}`;
    if (feature) {
      key = `${key}-${feature}`;
    }

    return key;
  }

  private getStorage(): Storage {
    switch (this.options.storage) {
      case BrowserStorage.LocalStorage:
        return localStorage;
      case BrowserStorage.SessionStorage:
        return sessionStorage;
      default:
        throw new Error(`Not supported storage '${this.options.storage}'`);
    }
  }
}
