import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Admin } from './pages/admin/admin';
import { PautaDetails } from './pages/pauta-details/pauta-details';
import { LoginComponent } from './pages/login-form/login-form';
import { AssociadoDetails } from './pages/associado-details/associado-details';
import { canActivateUser } from './shared/guards/can-activate-user';

export const routes: Routes = [{
      path: 'login',
      component: LoginComponent,
      data: { title: 'Login' }
    },{
    path: 'home',
    component: Home,
    data: { title: 'Home Page' },
    canActivate: [canActivateUser]
  },
  {
    path: 'admin',
    component: Admin,
    data: { title: 'Admin Page' },
    canActivate: [canActivateUser]
  },
  {
    path: 'pauta/:type',
    component: PautaDetails,
    data: { title: 'Nova pauta' },
    canActivate: [canActivateUser]
  },
  {
    path: 'associado/:type',
    component: AssociadoDetails,
    data: { title: 'Novo associado' },
    canActivate: [canActivateUser]
  },
  { path: '**', redirectTo: 'login' }
];
