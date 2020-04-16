import { InjectionToken } from '@angular/core';

export enum BrowserStorage {
  LocalStorage,
  SessionStorage
}

export interface IBrowserStorageOptions {
  appPrefix?: string;
  storage?: BrowserStorage;
}

export const NSS_DEFAULT_APP_PREFIX = 'app';
export const NSS_DEFAULT_BROWSER_STORAGE = BrowserStorage.LocalStorage;

export const NSS_DEFAULT_STORAGE_OPTIONS: IBrowserStorageOptions = {
 appPrefix: NSS_DEFAULT_APP_PREFIX,
 storage: NSS_DEFAULT_BROWSER_STORAGE
};

export function getDefaultStorageOptions() {
  return NSS_DEFAULT_STORAGE_OPTIONS;
}

export const NSS_STORAGE_OPTIONS = new InjectionToken<IBrowserStorageOptions>(
  'ngrx-browser-storage-store default storage options',
  {
    providedIn: 'root',
    factory: getDefaultStorageOptions,
  }
);
