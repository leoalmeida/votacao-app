import { Voto } from "./voto";

export type Sessao = {
  id: number;
  status: string;
  totalizadores?: [];
  resultado?: "" | "NAO" | "SIM";
  dataFimSessao?: string;
  dataInicioSessao?: string;
  votoAssociado?: Voto | null;
}

