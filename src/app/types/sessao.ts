import { Pauta } from "./pauta";

export enum StatusSessao {
  CREATED = "CREATED" , 
  OPEN_TO_VOTE="OPEN_TO_VOTE", 
  CLOSED="CLOSED", 
  CANCELLED="CANCELLED"
}

export interface Sessao {
  id: string;
  pauta: Pauta;
  status: string;
  votoComputado: boolean;
  totalizadores?: [];
  resultado?: "" | "NAO" | "SIM";
  dataFimSessao?: string;
  dataInicioSessao?: string;
}

export type SessaoFormData = Omit<Sessao, "id" | "status" | "resultado">;
