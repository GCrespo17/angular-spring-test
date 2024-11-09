import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig={
  providers:[
      //routes son las rutas que cree, withComponentInputBinding() hay que investigar
      //withRouterConfig me permite tomar rutas de mi ruta padre
      provideRouter(routes, withComponentInputBinding(), withRouterConfig({
          paramsInheritanceStrategy: 'always',
      })),
  ],
}
