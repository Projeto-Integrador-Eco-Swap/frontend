import Categoria from './Categoria.ts';
import Usuario from './Usuario';

export default interface Produto {
    id: number;
    titulo: string;
    descricao: string;
    data: string;
    foto: string;
    preco: number;
    categoria: Categoria | null;
    usuario: Usuario | null;
}