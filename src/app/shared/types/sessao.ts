import { Pauta } from "./pauta";

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

