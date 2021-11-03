import React, { useContext } from 'react';
import Navbar from '../../Components/Navbar';
import { ContextoUsuario } from '../../Services/context';

export default function Home() {
    
    const { logado, setLogado } = useContext(ContextoUsuario);

    return (
        <>
            <Navbar />
            <p>Página Home</p>  
            {
                logado 
                && <>
                    <br />
                    <button onClick={ () => setLogado(false) } >Deslogar</button>
                </>
            }
            

        </>
    );
}