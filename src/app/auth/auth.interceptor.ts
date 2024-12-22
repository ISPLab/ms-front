import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import {catchError, filter, from, switchMap} from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { productionConf, testConf } from '../config'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloakService = inject(KeycloakService);
  const exclude = [
    'digitalyard.s3.storage.selcloud.ru',
  ];
  if (exclude.find(x => req.url.includes(x)) != null){
    return next(req);
  }
  return from(keycloakService.getToken()).pipe(
    switchMap((authToken) => {
      // const baseUrl = window.location.href.startsWith(productionConf.host) ? productionConf.api : testConf.api;
      const baseUrl = window.location.href.startsWith(productionConf.host) ? productionConf.api : testConf.api;
      // const baseUrl = window.location.href.startsWith(productionConf.host) ? productionConf.api : productionConf.api;
      const authReq = req.clone({
        url: `${baseUrl}${req.url}`,
        headers: req.headers.set('Authorization', `Bearer${authToken}`),
      });
      return next(authReq).pipe(
        catchError((err) => {
          if (err) {
            switch (err.status) {
              case 401:
                keycloakService.logout();
            }
          }
          throw err;
        }),
      );
    }),
  );
};
