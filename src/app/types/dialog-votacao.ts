import { Pauta } from "./pauta";

export interface DialogData {
  pauta: Pauta;
  loggedUser: string;
  opcaoEscolhida: string;
}
