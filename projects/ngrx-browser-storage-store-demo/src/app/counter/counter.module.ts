import { CommonModule } from '@angular/common';
import { NgModule, InjectionToken } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, StoreConfig } from '@ngrx/store';
import {
  BrowserStorage,
  BrowserStorageModule,
  BrowserStorageMetaReducerLoader,
} from 'ngrx-browser-storage-store';
import { CounterIndexComponent } from './components/counter-index/counter-index.component';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterEffects } from './store/effects/counter.effects';
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
  declarations: [CounterIndexComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,

    CounterRoutingModule,
    BrowserStorageModule.forFeature(fromCounter.counterFeatureKey, {
      storage: BrowserStorage.SessionStorage,
    }),
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer, COUNTER_FEATURE_CONFIG),
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
