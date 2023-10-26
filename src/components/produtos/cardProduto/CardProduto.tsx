// @ts-ignore
import React from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'


interface CardProdutoProps {
    post: Produto
}

function CardProduto({ post }: CardProdutoProps) {
    return (
        <div className='border-slate-900 border flex flex-col mt-10 rounded overflow-hidden  justify-between'>
            <div>
                <div className="flex w-full bg-green-900 py-2 px-4 items-center gap-4">
                    <img src={post.usuario.foto !== '' ? post.usuario.foto : 'https://i.imgur.com/C2fYDPo.png'} className='h-8 w-8 rounded-full' alt="" />
                    <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
                </div>
                <div className='p-4 bg-white '>
                <h4 className='text-lg font-semibold text-center uppercase'>{post.titulo}</h4>
                    <img src={post.foto} alt="" className='w-148 rounded-lg border-2 p-1 mx-auto' />
                    <p>{post.descricao}</p>
                    <p>{post.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    <p>Categoria: {post.categoria?.descricao}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarProduto/${post.id}`} className='w-full text-white bg-green-400 hover:bg-green-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarProduto/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProduto