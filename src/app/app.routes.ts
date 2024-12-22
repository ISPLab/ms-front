import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { authGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';
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
        path: 'questions',
        loadComponent: () =>
          import('./pages/questions-book/questions-book.component').then(
            (m) => m.QuestionsBookComponent,
          ),
        canActivate: [RoleGuard],
        data: { expectedRole: ['up-manager'] },
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
