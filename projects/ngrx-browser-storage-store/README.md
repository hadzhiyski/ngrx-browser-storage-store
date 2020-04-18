# ngrx-browser-storage-store
Persist ngrx state to localStorage / sessionStrage


## Installation
``` cli
  npm i ngrx-browser-storage-store
```

## Dependencies
  - [@angular/common@9.1.1](https://www.npmjs.com/package/@angular/common/v/9.1.1)
  - [@angular/core@9.1.1](https://www.npmjs.com/package/@angular/core/v/9.1.1)
  - [@ngrx/store@9.1.0](https://www.npmjs.com/package/@ngrx/store/v/9.1.0)
  - [@ngrx/effects@9.1.0](https://www.npmjs.com/package/@ngrx/effects/v/9.1.0)
  - [rxjs@6.5.4](https://www.npmjs.com/package/rxjs/v/6.5.4)

## Build
There are a few warnings during build. These will be removed in the next Angular release. [Click](https://github.com/angular/angular/pull/36525)
```
WARNING in The basePath "D:/Projects/ngrx-browser-storage-store/dist/ngrx-browser-storage-store/ngrx-browser-storage-store" computed from baseUrl "D:/Projects/ngrx-browser-storage-store" and path mapping "dist/ngrx-browser-storage-store/ngrx-browser-storage-store" does not exist in the file-system.
It will not be scanned for entry-points.
```

## Getting Started

### Import BrowserStorageModule

#### For Root
To inject 'middleware' meta reducers, use the `META_REDUCERS` injection token exported in the `@ngrx/store` API and a `Provider` to register the meta reducers through dependency injection.
``` typescript
import { MetaReducer, META_REDUCERS } from '@ngrx/store';
import {
  BrowserStorage,
  BrowserStorageModule,
  BrowserStorageMetaReducerLoader,
} from 'ngrx-browser-storage-store';
import * as fromRoot from './reducers';

export function metaReducerFactory(bsLoader: BrowserStorageMetaReducerLoader): MetaReducer<fromRoot.State> {
  return bsLoader.get<fromRoot.State>();
}

@NgModule({
  imports: [
    // The options object is optional. If you do not provide options, the default values are used.
    BrowserStorageModule.forRoot({
      storage: BrowserStorage.SessionStorage // default: BrowserStorage.LocalStorage
    }),
    StoreModule.forRoot(reducers),
  ],
  providers: [
    {
      provide: META_REDUCERS,
      deps: [BrowserStorageMetaReducerLoader],
      useFactory: metaReducerFactory,
      multi: true,
    },
  ],
})
export class AppModule {}
```

#### For Feature
``` typescript
import { StoreModule, StoreConfig } from '@ngrx/store';
import {
  BrowserStorage,
  BrowserStorageModule,
  BrowserStorageMetaReducerLoader,
} from 'ngrx-browser-storage-store';
import * as fromCounter from './store/reducers/counter.reducer';

export const COUNTER_FEATURE_CONFIG = new InjectionToken<StoreConfig<fromCounter.ICounterState>>('Counter Feature Config');

export function getCounterFeatureConfig(bsLoader: BrowserStorageMetaReducerLoader): StoreConfig<fromCounter.ICounterState> {
  return {
    metaReducers: [
      bsLoader.get<fromCounter.ICounterState>()
    ]
  };
}

@NgModule({
  imports: [
    BrowserStorageModule.forFeature(fromCounter.counterFeatureKey, {
      storage: BrowserStorage.SessionStorage,
    }),
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer, COUNTER_FEATURE_CONFIG),
  ],
  providers: [
    {
      provide: COUNTER_FEATURE_CONFIG,
      deps: [BrowserStorageMetaReducerLoader],
      useFactory: getCounterFeatureConfig,
    },
  ],
})
export class CounterModule {}
```

### Save state to browser storage
You could save your state to localStorage / sessionStorage via `@ngrx/effects`

``` typescript
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { BrowserStorageEffects } from 'ngrx-browser-storage-store';
import { ICounterState } from '../reducers/counter.reducer';
import { selectCounterState } from '../selectors/counter.selectors';

@Injectable()
export class CounterEffects {
  saveToLocalStorage$ = this.browserStorageEffects.saveForFeature(
    this.actions$,
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
