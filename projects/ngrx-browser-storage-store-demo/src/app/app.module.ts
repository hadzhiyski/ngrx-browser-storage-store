import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NSS_STORAGE_OPTIONS, BrowserStorage } from 'ngrx-browser-storage-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatListModule,
    MatToolbarModule,

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),

    AppRoutingModule,

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
