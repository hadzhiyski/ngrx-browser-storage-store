import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreConfig, StoreModule } from '@ngrx/store';
import {
  BrowserStorage,
  BrowserStorageMetaReducerLoader,
  BrowserStorageModule,
} from 'ngrx-browser-storage-store';
import { CounterIndexComponent } from './components/counter-index/counter-index.component';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterEffects } from './store/effects/counter.effects';
import * as fromCounter from './store/reducers/counter.reducer';

export const COUNTER_FEATURE_CONFIG = new InjectionToken<
  StoreConfig<fromCounter.ICounterState>
>('Counter Feature Config');

export function getCounterFeatureConfig(
  bsLoader: BrowserStorageMetaReducerLoader
): StoreConfig<fromCounter.ICounterState> {
  return {
    metaReducers: [bsLoader.get<fromCounter.ICounterState>()],
  };
}

@NgModule({
  declarations: [CounterIndexComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,

    FontAwesomeModule,

    CounterRoutingModule,
    BrowserStorageModule.forFeature(fromCounter.counterFeatureKey, {
      storage: BrowserStorage.SessionStorage,
    }),
    StoreModule.forFeature(
      fromCounter.counterFeatureKey,
      fromCounter.reducer,
      COUNTER_FEATURE_CONFIG
    ),
    EffectsModule.forFeature([CounterEffects]),
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
