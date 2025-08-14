import { Voto } from "./voto";

export type Associado = {
   id: number;
   email: string;
   nome: string;
   telefone: string;
   accessToken?: string;
   votacaoAssociado?: Map<number,Voto> | null;
}
