import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../utils/toastAlert';
import logotipo from '../../assets/logotipo.png';

import './NavBar.css'; // Importe seu arquivo CSS

function Navbar() {
    let navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        toastAlerta('Usuário deslogado com sucesso', 'info');
        navigate('/login');
    }

    let navbarComponent;

    if (usuario.token !== '') {
        navbarComponent = (
            <div className='navbar w-full py-5 flex bg-white items-center justify-between shadow-md' >
                <Link to='/home' className='text-1x1 font-bold uppercase'>
                    <img src={logotipo} alt="Logotipo da sua empresa" className='w-50 ml-10' />
                </Link>

                <div className='flex gap-4 mr-10'>
                    <Link to='/produtos' className='hover:border-b-2 hover:border-green-600 custom-link mr-4'>Produtos</Link>
                    <Link to='/categorias' className='hover:border-b-2 hover:border-green-600 custom-link mr-4'>Categorias</Link>
                    <Link to='/cadastroCategoria' className='hover:border-b-2 hover:border-green-600 custom-link mr-4'>Cadastrar categoria</Link>
                    <Link to='/perfil' className='hover:border-b-2 hover:border-green-600 custom-link mr-4'>Perfil</Link>
                    <Link to='' onClick={logout} className='hover:border-b-2 hover:border-green-600 custom-link mr-4'>Sair</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            {navbarComponent}
        </>
    );
}

export default Navbar;
