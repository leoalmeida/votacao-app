import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages-module';
import { ComponentsModule } from './shared/components/components-module';
import { SessaoService } from './shared/services/sessao.service';
import { AssociadoService } from './shared/services/associado.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleService } from './shared/services/title.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PautaService } from './shared/services/pauta.service';
import { VotacaoService } from './shared/services/votacao.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './core/material.module';
import { LoadingService } from './shared/services/loading.service';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
    MaterialModule,
    DateFormatPipe 
  ],
  exports:[],
  providers: [provideHttpClient(withInterceptorsFromDi()),
    SessaoService,
    PautaService,
    VotacaoService,
    AssociadoService,
    TitleService,
    LoadingService,
    DateFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
