// @ts-ignore
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import './Home.css';
import ListaProdutos from '../../components/produtos/listaProduto/ListaProduto';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import homeImg from '../../assets/homeImg.png'
import homeImg2 from '../../assets/homeImg2.jpg'

function Home() {
    const navigate = useNavigate(); // Obtenha a função de navegação

    const handleVerProdutos = () => {
        // Navegar para a rota de produtos quando o botão for clicado
        navigate('/produtos');
    }

    return (
        <>
            <div className="bg-green-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vindo(a)</h2>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opiniões</p>

                        <div className="flex justify-around gap-4">
                            <ModalProduto />
                            <button className='border rounded px-4 hover:bg-white hover:text-green-800' onClick={handleVerProdutos}>Ver produtos</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeImg} alt="" className='w-2/3' />

                    </div>
                </div>
            </div>
            <ListaProdutos/>

            <div className="flex justify-center">
                <img src={homeImg2} alt="" />
            </div>
        </>
    );
}

export default Home;
