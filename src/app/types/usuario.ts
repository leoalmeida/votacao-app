export interface Usuario {
  id: string;
  email: string;
  login: string;
  passwd: string;
}

export type UsuarioFormData = Omit<Usuario, "id">;
