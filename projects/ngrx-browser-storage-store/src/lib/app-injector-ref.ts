import {
  AbstractType,
  InjectFlags,
  InjectionToken,
  Injector,
  Type,
  StaticProvider,
} from '@angular/core';

export class AppInjectorRef {
  private static injector: Injector | undefined = undefined;
  private static initialized = false;

  static isInitialized(): boolean {
    return AppInjectorRef.initialized;
  }

  static set(injector: Injector) {
    AppInjectorRef.injector = injector;
    AppInjectorRef.initialized = true;
  }

  static withDefaultProviders(providers: StaticProvider[]) {
    const injector = Injector.create({
      providers,
      name: 'ngrx-browser-storage-store-injector'
    });

    AppInjectorRef.set(injector);
  }

  static get<T>(
    token: Type<T> | InjectionToken<T> | AbstractType<T>,
    notFoundValue?: T,
    flags?: InjectFlags
  ): T {
    if (!!!AppInjectorRef.injector) {
      throw new Error(
        'Injector is not set! Set the app module injector in main.ts'
      );
    }

    return AppInjectorRef.injector.get<T>(token, notFoundValue, flags);
  }
}
