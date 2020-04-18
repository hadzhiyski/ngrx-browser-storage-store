import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserStorageMetaReducerLoader } from './browser-storage-meta-reducer-loader';
import {
  BrowserStorageConfig,
  NBSS_DEFAULT_BROWSER_STORAGE,
} from './browser-storage.config';
import { BrowserStorageEffects } from './browser-storage.effects';
import { BrowserStorageService } from './browser-storage.service';
import { _NBSS_BROWSER_STORAGE, _NBSS_FEATURE_NAME } from './tokens';

@NgModule({})
export class BrowserStorageRootModule {}

@NgModule({})
export class BrowserStorageFeatureModule {}

@NgModule({})
export class BrowserStorageModule {
  static forRoot(
    options?: BrowserStorageConfig
  ): ModuleWithProviders<BrowserStorageRootModule> {
    return {
      ngModule: BrowserStorageRootModule,
      providers: [
        BrowserStorageEffects,
        BrowserStorageMetaReducerLoader,
        BrowserStorageService,
        {
          provide: _NBSS_BROWSER_STORAGE,
          useValue:
            (options && options.storage) || NBSS_DEFAULT_BROWSER_STORAGE,
        },
        {
          provide: _NBSS_FEATURE_NAME,
          useValue: undefined,
        },
      ],
    };
  }

  static forFeature(
    feature: string,
    options?: BrowserStorageConfig
  ): ModuleWithProviders<BrowserStorageFeatureModule> {
    return {
      ngModule: BrowserStorageFeatureModule,
      providers: [
        BrowserStorageEffects,
        BrowserStorageMetaReducerLoader,
        BrowserStorageService,
        {
          provide: _NBSS_BROWSER_STORAGE,
          useValue:
            (options && options.storage) || NBSS_DEFAULT_BROWSER_STORAGE,
        },
        {
          provide: _NBSS_FEATURE_NAME,
          useValue: feature,
        },
      ],
    };
  }
}
