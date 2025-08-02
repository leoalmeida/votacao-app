export interface Pauta {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
}

export type PautaFormData = Omit<Pauta, "id">;
