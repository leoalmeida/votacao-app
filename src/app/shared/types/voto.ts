export type Voto = {
  id?: number;
  idAssociado: number;
  idSessao: number;
  opcao: "NAO" | "SIM";
  dataVoto?: string;
}
