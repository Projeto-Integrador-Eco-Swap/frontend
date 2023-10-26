// @ts-ignore
// noinspection SpellCheckingInspection

import React from 'react';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import {AuthProvider} from './contexts/AuthContext';
import ListaCategoria from './components/categorias/listaCategorias/ListaCategoria.tsx'
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria'
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaProdutos from './components/produtos/listaProduto/ListaProduto.tsx';
import FormularioProduto from './components/produtos/formularioProduto/FormularioProduto.tsx';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import Perfil from "./paginas/perfil/Perfil.tsx";
import Sobre from './paginas/sobre/Sobre.tsx';

function App() {
    return (
        <>
            <AuthProvider>
            <ToastContainer />
                <BrowserRouter>
                    <Navbar/>
                    <div className='min-h-[80vh] body-collor'>
                        <Routes>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/cadastro" element={<Cadastro/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/categorias" element={<ListaCategoria/>}/>
                            <Route path="/cadastroCategoria" element={<FormularioCategoria/>}/>
                            <Route path="/editarCategoria/:id" element={<FormularioCategoria/>}/>
                            <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>}/>
                            <Route path="/produtos" element={<ListaProdutos/>}/>
                            <Route path="/cadastroProduto" element={<FormularioProduto/>}/>
                            <Route path="/editarProduto/:id" element={<FormularioProduto/>}/>
                            <Route path="/deletarProduto/:id" element={<DeletarProduto/>}/>
                            <Route path="/perfil" element={<Perfil/>}/>
                            <Route path="/sobre" element={<Sobre />} />
                        </Routes>
                    </div>
                    <Footer/>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;