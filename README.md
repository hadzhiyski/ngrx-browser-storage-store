# ngrx-browser-storage-store
Persist ngrx state to localStorage / sessionStrage


## Installation
  npm i ngrx-browser-storage-store

## Dependencies
  - [@angular/common@9.1.1](https://www.npmjs.com/package/@angular/common/v/9.1.1)
  - [@angular/core@9.1.1](https://www.npmjs.com/package/@angular/core/v/9.1.1)
  - [@ngrx/store@9.1.0](https://www.npmjs.com/package/@ngrx/store/v/9.1.0)
  - [@ngrx/effects@9.1.0](https://www.npmjs.com/package/@ngrx/effects/v/9.1.0)
  - [rxjs@6.5.4](https://www.npmjs.com/package/rxjs/v/6.5.4)

## Build
There are a few warnings during build. These will be removed in the next Angular release. [Click](https://github.com/angular/angular/pull/36525)
```
WARNING in The basePath "D:/Projects/ngrx-storage-store/dist/ngrx-storage-store/ngrx-storage-store" computed from baseUrl "D:/Projects/ngrx-storage-store" and path mapping "dist/ngrx-storage-store/ngrx-storage-store" does not exist in the file-system.
It will not be scanned for entry-points.
```

## Getting Started

### Using AppModule injector
You could use the main injector of you app to help the `ngrx-storage-store` library to use your DI.
This way, the app prefix parameters are optional. Simply you need to modify your `main.ts` file with the following code

``` typescript
import { AppInjectorRef } from 'ngrx-browser-storage-store';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((moduleRef) => AppInjectorRef.set(moduleRef.injector))
  .catch((err) => console.error(err));
```

### Register localStorage loader

#### For Root
``` typescript
import { NSS_STORAGE_OPTIONS, BrowserStorage, BrowserStorageNgrxModule } from 'ngrx-browser-storage-store';

@NgModule({
  imports: [
    BrowserStorageNgrxModule.forRoot(fromCounter.counterFeatureKey, {
      storage: BrowserStorage.SessionStorage,
    }),
    StoreModule.forRoot(reducers, {
      metaReducers: [
        BrowserStorageNgrxModule.metaReducerInjector.forRoot(),
      ],
    }),
  ],
  providers: [
    {
      provide: NSS_STORAGE_OPTIONS,
      useValue: {
        appPrefix: 'ngrx-browser-storage-store',
        storage: BrowserStorage.LocalStorage
      }
    }
  ],
})
export class AppModule {}
```

#### For Feature
``` typescript
import { BrowserStorage, BrowserStorageNgrxModule } from 'ngrx-browser-storage-store';
import * as fromCounter from './store/reducers/counter.reducer';
@NgModule({
  imports: [
    BrowserStorageNgrxModule.forFeature(fromCounter.counterFeatureKey, {
      storage: BrowserStorage.SessionStorage,
    }),
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer, {
      metaReducers: [
        BrowserStorageNgrxModule.metaReducerInjector.forFeature<fromCounter.ICounterState>
            (fromCounter.counterFeatureKey),
      ],
    }),
  ],
})
export class CounterModule {}
```

### Save state to browser storage effects
You could save your state to localStorage / sessionStorage via `@ngrx/effects`

``` typescript
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { BrowserStorageEffects } from 'ngrx-browser-storage-store';
import { counterFeatureKey, ICounterState } from '../reducers/counter.reducer';
import { selectCounterState } from '../selectors/counter.selectors';

@Injectable()
export class CounterEffects {
  saveToLocalStorage$ = this.browserStorageEffects.saveForFeature(
    this.actions$,
    counterFeatureKey,
    selectCounterState
  );

  constructor(
    private actions$: Actions,
    private browserStorageEffects: BrowserStorageEffects<ICounterState>
  ) {}
}
```

### Examples & use cases
Take a look into the `ngrx-browser-storage-store-demo` application

## License
Licensed to [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
