export enum BrowserStorage {
  LocalStorage,
  SessionStorage,
}

export const NBSS_DEFAULT_BROWSER_STORAGE = BrowserStorage.LocalStorage;

export interface BrowserStorageConfig {
  storage?: BrowserStorage;
}
