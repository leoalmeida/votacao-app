import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Associado } from '../types/associado';
import { associados } from '../../../mocks/associados';
@Injectable({
  providedIn: 'root'
})
export class AssociadoService {
  readonly baseUrl = '/api/v1/associado';

  private apiData = [...associados];
  private associadoList = signal<Associado[]>([]);

  private mockHttpCall = <T>(result: T) => {
    return new Observable<T>(s => {
        s.next(result);
        s.complete();
    });
  }

  items = this.associadoList.asReadonly();

  //GET - "/"
  getAll(): void {
    this.mockHttpCall<Associado[]>(this.apiData)
                .subscribe(xs => this.associadoList.set(xs));
  }

  //GET - "/{id}"
  getById(id: string): Associado | undefined {
    return this.apiData.find(associado => associado.id === id);
  }

  //POST - "/"
  addAssociado(associado: Associado) {
    console.log(`Cadastrando novo associado: ${associado.nome}.`);
    let id: string = "10";
    associado.id = "10";
    this.apiData = [...this.apiData, associado];
    this.mockHttpCall<Associado>(associado)
        .subscribe(x => this.associadoList.update(xs => [...xs, x]));
  }
}
