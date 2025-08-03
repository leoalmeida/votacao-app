import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages-module';
import { ComponentsModule } from './shared/components/components-module';
import { SessaoService } from './shared/services/sessao.service';
import { AssociadoService } from './shared/services/associado.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule
  ],
  exports:[],
  providers: [SessaoService,AssociadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
