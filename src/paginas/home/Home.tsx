// @ts-ignore
import React from 'react';
import homeLogo from '../../assets/home.jpg'
import './Home.css';
import ListaProdutos from '../../components/produtos/listaProduto/ListaProduto';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';

function Home() {
    return (
        <>
            <div className="bg-green-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vindo(a)</h2>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>

                        <div className="flex justify-around gap-4">
                            <ModalProduto />
                            <button className='rounded bg-black text-white py-2 px-4'>Ver produtos</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-2/3' />

                    </div>
                </div>
            </div>
            <ListaProdutos/>
        </>
    );
}

export default Home;