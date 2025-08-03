import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admin } from './admin/admin';
import { NotFound } from './not-found/not-found';
import { AssociadoDetails } from './associado-details/associado-details';
import { PautaDetails } from './pauta-details/pauta-details';
import { Home } from './home/home';
import { SessaoService } from '../shared/services/sessao.service';
import { AssociadoService } from '../shared/services/associado.service';
import { ComponentsModule } from '../shared/components/components-module';



@NgModule({
   declarations: [
      Home, Admin, NotFound, AssociadoDetails, PautaDetails
   ],
   imports: [
      CommonModule, ComponentsModule
   ],
   providers: [
      SessaoService, AssociadoService
   ],
   exports: [
      Home, Admin, NotFound, AssociadoDetails, PautaDetails
   ]
})
export class PagesModule { }
