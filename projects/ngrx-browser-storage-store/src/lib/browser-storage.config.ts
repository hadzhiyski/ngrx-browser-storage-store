export enum BrowserStorage {
  LocalStorage = 'LocalStorage',
  SessionStorage = 'SessionStorage',
}

export const NBSS_DEFAULT_BROWSER_STORAGE = BrowserStorage.LocalStorage;

export interface BrowserStorageConfig {
  storage?: BrowserStorage;
}
