import { Injectable } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageCache {
  private readonly featureCache: { [feature: string]: BrowserStorageService };
  private rootService: BrowserStorageService;

  constructor() {
    this.featureCache = {};
  }

  get(feature: string): BrowserStorageService {
    return this.featureCache[feature];
  }

  set(feature: string, service: BrowserStorageService): void {
    this.featureCache[feature] = service;
  }

  setRoot(service: BrowserStorageService) {
    this.rootService = service;
  }

  getRoot(): BrowserStorageService {
    return this.rootService;
  }
}
