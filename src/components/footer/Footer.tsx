// @ts-ignore
import React, { useContext } from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {
    const { usuario, handleLogout } = useContext(AuthContext)
    const data = new Date().getFullYear()
    const showFooter = usuario.token !== ''

    return (
        <>
            {showFooter && (
                <div className="flex justify-center bg-green-900 text-white">
                    <div className="container flex flex-col items-center py-4">
                        <p className='text-xl font-bold'>Eco Swap | Copyright: {data}</p>
                        <p className='text-lg'>Acesse nossas redes sociais</p>
                        <div className='flex gap-2'>
                            <LinkedinLogo size={48} weight='bold'/>
                            <InstagramLogo size={48} weight='bold'/>
                            <FacebookLogo size={48} weight='bold'/>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Footer
