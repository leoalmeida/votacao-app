import { Routes } from '@angular/router';
import { HomeComponent } from './home-page/home.component';
import { AdminComponent } from './admin-page/admin.component';
import { SessionCardComponent } from './components/session-card/session-card.component';
import { NotFound } from './components/not-found/not-found.component';
import { PautaDetailsComponent } from './components/pauta-details/pauta-details.component';

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
