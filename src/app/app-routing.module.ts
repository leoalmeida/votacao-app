import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Admin } from './pages/admin/admin';
import { NotFound } from './pages/not-found/not-found';
import { PautaDetails } from './pages/pauta-details/pauta-details';

const routes: Routes = [{
    path: '',
    component: Home,
    title: 'Home Page'
  },
  {
    path: 'admin',
    component: Admin,
    title: 'Admin'
  },
  {
    path: 'pauta',
    component: PautaDetails,
    title: 'Nova pauta'
  },
  { path: '**', component: NotFound }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
