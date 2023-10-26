import React from 'react';
import './Home.css';
import ListaProdutos from '../../components/produtos/listaProduto/ListaProduto';
import banner from '../../assets/carrossel_home-1.png'

function Home() {
    return (
        <>
                <div className="bg-green-900 flex justify-center">
                    <div className='banner'>
                        <div className="bg-black/20 w-full sm:w-1/2 ml-auto h-full flex flex-col justify-between p-6">
                            <h2 className='font-bold text-white text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium inventore et placeat est laboriosam nulla sapiente voluptatibus quis excepturi rerum expedita vitae debitis saepe, asperiores itaque temporibus sunt ipsa!</h2>
                            <p className='font-semibold text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolore quidem inventore nulla assumenda expedita optio asperiores dolor aliquid accusamus.</p>
                        </div>
                    </div>
                </div>
            <ListaProdutos />
            <img src={banner} className='' alt="" />
        </>
    );
}

export default Home;
