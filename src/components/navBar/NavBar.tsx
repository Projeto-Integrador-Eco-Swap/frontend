import React, { useState, useContext } from "react";
import fechar from '../../assets/fechar.png';
import menu from '../../assets/menu.png';
import { Link, useNavigate } from 'react-router-dom';
import { toastAlerta } from "../../utils/toastAlert";
import { AuthContext } from "../../contexts/AuthContext";
import logotipo from "../../assets/logotipo.png";
import './NavBar.css';

export const navLinks = [
  {
    id: "produtos",
    title: "Produtos",
  },
  {
    id: "cadastroProduto",
    title: "Cadastro Produto",
  },
  {
    id: "categorias",
    title: "Categorias",
  },
  {
    id: "cadastroCategoria",
    title: "Cadastro Categoria",
  },
  {
    id: "perfil",
    title: "Perfil",
  },
  {
    id: "sobre",
    title: "Sobre",
  },
  {
    id: "sair",
    title: "Sair",
  },
];

function Navbar() {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta('Usuário deslogado com sucesso', 'info');
    navigate('/login');
  }

  // Função para alternar o estado do menu dropdown
  const toggleDropdown = () => {
    setToggle(!toggle);
  };

  let navbarComponent;

  if (usuario.token !== '') {
    navbarComponent = (
      <nav className="w-full bg-white flex my-5 justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/home" className="text-3xl bg-white text-green flex margin-left items-center cursor-pointer">
            <img src={logotipo} alt="Logo" className="w-9 mb-3" />
            <p className="my-auto ml-2 texto ">Eco Swap</p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 navbar bg-white">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-5" : "mr-2"}`}
              onClick={() => {
                setActive(nav.title);
                if (nav.id === 'sair') {
                  logout();
                } else {
                  navigate(nav.id);
                }
                toggleDropdown();
              }}
            >
              <Link to={`${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
          <img src={usuario.foto !== '' ? usuario.foto : 
          'https://i.imgur.com/C2fYDPo.png'} alt={`Foto de perfil de ${usuario.nome}`}
           className='rounded-full w-14 h-14 border-8 border-white' />
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden bg-white mr-5 flex flex-1 mobile justify-end items-center ml-4">
          {toggle ? (

            // Exibe a imagem de fechar quando o menu está aberto
            <img
              src={fechar}
              alt="fechar"
              className="w-7 h-7 object-contain"
              onClick={toggleDropdown}
            />
          ) : (

            // Exibe o ícone do menu (hambúrguer) quando o menu está fechado
            <img
              src={menu}
              alt="menu"
              className="w-7 h-7 object-contain"
              onClick={toggleDropdown}
            />
          )}
          {/* Dropdown Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "block"
            } absolute top-20 right-0 h-screen w-screen bg-black-gradient rounded-xl sidebar`}
          >
            <ul className="h-[1500px] mt-10 items-center list-none bg-white flex justify-start items-start flex-1 flex-col mt-4">
              <img src={usuario.foto !== '' ? usuario.foto : 'https://i.imgur.com/C2fYDPo.png'} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full border-8 border-white mt-10 mb-6 h-[125px] w-[125px]' />
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer aling-center text-[20px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    setActive(nav.title);
                    if (nav.id === 'sair') {
                      logout();
                    } else {
                      navigate(nav.id);
                    }
                    toggleDropdown();
                  }}
                >
                  <Link to={`${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
