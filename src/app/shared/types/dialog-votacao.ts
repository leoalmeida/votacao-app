import { Pauta } from "./pauta";

export interface DialogVotacao {
  pauta: Pauta;
  loggedUser: string;
  opcaoEscolhida: string;
}
