// @ts-ignore
import React from 'react';
import './Home.css';
import ListaProdutos from '../../components/produtos/listaProduto/ListaProduto';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';

function Home() {
    return (
        <>
            <div className="bg-green-900 flex justify-center">
                <div className='container grid text-white'>
                    <div className="flex flex-col gap-7 items-center justify-center py-4">
                        <div className="flex justify-around gap-4">
                            <ModalProduto />
                            <button className='rounded bg-black text-white py-2 px-4'>Ver produtos</button>
                        </div>
                        <h2 className='text-6xl font-bold'>Seja bem vindo(a)!</h2>
                    </div>
                </div>
            </div>
            <ListaProdutos/>
        </>
    );
}

export default Home;