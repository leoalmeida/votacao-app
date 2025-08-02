import { Injectable, signal } from '@angular/core';
import { Sessao } from '../types/sessao';
import { session, sessions } from '../../mocks/sessoes';
import { Pauta } from '../types/pauta';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  readonly baseUrl = '/api/v1/sessao';
  private apiData = [...sessions];
  private sessionsList = signal<Sessao[]>([]);

  private mockHttpCall = <T>(result: T) => {
    return new Observable<T>(s => {
        s.next(result);
        s.complete();
    });
  }

  items = this.sessionsList.asReadonly();

  getAll(){
    this.mockHttpCall<Sessao[]>(this.apiData)
            .subscribe(xs => this.sessionsList.set(xs));
  }

  getById(id: string): Sessao | undefined {
    return this.apiData.find(sessao => sessao.id === id);
  }
  
  //POST - "/"
  submitSession(idAssociado: string, pauta: Pauta) {
    console.log(`Solicitando nova votação: associado: ${idAssociado}, pauta: ${pauta.nome}.`);
    let id: string = "10";
    let newSession = {id,pauta,...session};    
    this.apiData = [...this.apiData, newSession];
    this.mockHttpCall<Sessao>(newSession)
        .subscribe(x => this.sessionsList.update(xs => [...xs, x]));
  }

  //PUT - "/{idSessao}/iniciar"
  startSession(idSessao: string) {
    console.log(`Iniciando sessão de votação: sessão: ${idSessao}.`);
  }

  //PUT - "/{idSessao}/finalizar"
  finalizeSession(idSessao: string) {
    console.log(`Finalizando sessão de votação: sessão: ${idSessao}.`);
  }

  //PUT - "/{idSessao}/cancelar"
  cancelSession(idSessao: string) {
    console.log(`Cancelando sessão de votação: sessão: ${idSessao}.`);
  }

  //PUT - "/{idSessao}/votar"
  addSessionVote(idSessao: string, opcaoVoto: string) {
    console.log(`Contabilizando voto para a sessão de votação: sessão: ${idSessao}. opcaoVoto: ${opcaoVoto}`);
  }
  
}