import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';
import { AdminComponent } from './pages/admin-page/admin.component';
import { NotFound } from './pages/not-found/not-found.component';
import { PautaDetailsComponent } from './pages/pauta-details/pauta-details.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Admin'
  },
  {
    path: 'pauta',
    component: PautaDetailsComponent,
    title: 'Nova pauta'
  },
  { path: '**', component: NotFound }
];
