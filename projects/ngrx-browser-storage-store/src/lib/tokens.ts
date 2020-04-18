import { InjectionToken } from '@angular/core';
import { BrowserStorage } from './browser-storage.config';
import { Optional } from './helpers';

export const _NBSS_BROWSER_STORAGE = new InjectionToken<Optional<BrowserStorage>>(
  'ngrx-browser-storage-store Internal Browser Storage'
);

export const _NBSS_FEATURE_NAME = new InjectionToken<Optional<string>>(
  'ngrx-browser-storage-store Internal feature name'
);
