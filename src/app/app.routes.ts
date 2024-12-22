import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'profile',
        loadComponent: () =>
          import(`./pages/profile-page/profile-page.component`).then(
            (mod) => mod.ProfilePageComponent,
          ),
      },
      {
        path: 'demo',
        loadChildren: () =>
          import('./pages/demo/demo.routes').then((routes) => routes.routes),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import(`./pages/not-found-page/not-found-page.component`).then(
        (mod) => mod.NotFoundPageComponent,
      ),
  },
];
