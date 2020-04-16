import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppInjectorRef } from './app-injector-ref';
import { BrowserStorageCache } from './browser-storage-cache';
import {
  IBrowserStorageOptions,
  NSS_DEFAULT_STORAGE_OPTIONS,
  NSS_STORAGE_OPTIONS,
} from './browser-storage-options';
import { BrowserStorageEffects } from './browser-storage.effects';
import { BrowserStorageService } from './browser-storage.service';
import { MetaReducerInjector } from './meta-reducer-injector';

@NgModule({
  providers: [
    BrowserStorageEffects,
    {
      provide: NSS_STORAGE_OPTIONS,
      useValue: NSS_DEFAULT_STORAGE_OPTIONS,
    },
  ],
})
export class BrowserStorageNgrxModule {
  static readonly metaReducerInjector = new MetaReducerInjector();

  static forRoot(
    options?: IBrowserStorageOptions
  ): ModuleWithProviders<BrowserStorageNgrxModule> {
    BrowserStorageNgrxModule.init(options || NSS_DEFAULT_STORAGE_OPTIONS);

    const cache = AppInjectorRef.get(BrowserStorageCache);
    const globalOptions = AppInjectorRef.get(NSS_STORAGE_OPTIONS);
    const service = BrowserStorageService.create(options, globalOptions);
    cache.setRoot(service);

    return {
      ngModule: BrowserStorageNgrxModule,
      providers: [
        BrowserStorageEffects,
        {
          provide: NSS_STORAGE_OPTIONS,
          useValue: options || NSS_DEFAULT_STORAGE_OPTIONS,
        },
      ],
    };
  }

  static forFeature(
    feature: string,
    options?: IBrowserStorageOptions
  ): ModuleWithProviders<BrowserStorageNgrxModule> {
    BrowserStorageNgrxModule.init(options || NSS_DEFAULT_STORAGE_OPTIONS);

    const cache = AppInjectorRef.get(BrowserStorageCache);
    const globalOptions = AppInjectorRef.get(NSS_STORAGE_OPTIONS);
    const service = BrowserStorageService.create(options, globalOptions);
    cache.set(feature, service);

    return {
      ngModule: BrowserStorageNgrxModule,
      providers: [
        BrowserStorageEffects,
        {
          provide: NSS_STORAGE_OPTIONS,
          useValue: options || NSS_DEFAULT_STORAGE_OPTIONS,
        },
      ],
    };
  }

  private static init(options: IBrowserStorageOptions): void {
    if (!AppInjectorRef.isInitialized()) {
      const providers = [
        { provide: BrowserStorageCache },
        { provide: NSS_STORAGE_OPTIONS, useValue: options },
      ];
      AppInjectorRef.withDefaultProviders(providers);
    }
  }
}
