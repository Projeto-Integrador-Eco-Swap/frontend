import Produto  from "./Produto.ts";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  produto?: Produto | null;
}