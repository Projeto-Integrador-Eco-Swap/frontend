// @ts-ignore
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import backgroundPerfil from '../../assets/backgroundPerfil.jpg'
import { toastAlerta } from '../../utils/toastAlert'
function Perfil() {
    let navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Você precisa estar logado', 'info')
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto mt-8 rounded-2xl overflow-hidden'>
            <img className='w-full h-72 object-cover border-b-8 border-white' src={backgroundPerfil} alt="Capa do Perfil" />
            <img src={usuario.foto !== '' ? usuario.foto : 'https://i.imgur.com/C2fYDPo.png'} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 h-56 mx-auto mt-[-8rem] border-8 border-white' />
            <div className="mt-[-6rem] h-72 flex flex-col bg-green-900 text-white text-2xl items-center justify-center">
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>
        </div>
    )
}

export default Perfil