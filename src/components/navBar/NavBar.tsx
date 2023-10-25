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
      <nav className="w-full flex py-6 justify-between items-center navbar">
        {/* Logo */}
        <div>
          <Link to="/home" className="text-3xl text-green flex mobile items-center cursor-pointer">
            <img src={logotipo} alt="Logo" className="w-12" />
            <p className="mt-7">Eco Swap</p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
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
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden mt-5 mr-10 flex flex-1 mobile justify-end items-center ml-4">
          <img
            src={menu}
            alt="menu"
            className="w-7 h-7 object-contain"
            onClick={toggleDropdown}
          />
          {/* Dropdown Menu */}
          <div
            className={`${
                !toggle ? "hidden" : "block"
            } absolute top-0 right-0 h-screen w-screen bg-black-gradient rounded-xl sidebar`}
>               
            <h1>Menu</h1>
            <img
              src={fechar}
              alt="fechar"
              className="w-7 h-7 object-contain"
              onClick={toggleDropdown}
            />
            <ul className="h-screen list-none bg-white flex justify-start items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
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
                  <a href={`#${nav.id}`}>{nav.title}</a>
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
