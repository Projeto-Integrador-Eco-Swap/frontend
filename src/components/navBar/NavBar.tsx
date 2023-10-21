// @ts-ignore
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
            <div className='navbar w-full flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                <Link to='/home' className='text-2xl font-bold uppercase'>
                        <img src={logotipo} alt="Logotipo da sua empresa"  />
                    </Link>

                    <div className='flex gap-4 border'>
                        <Link to='/produtos' className='hover:underline'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                        <Link to='/sair' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
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
