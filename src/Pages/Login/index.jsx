import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { ContextoUsuario } from '../../Services/context';

export default function Login() {

    const { logado, setLogado } = useContext(ContextoUsuario);

    return (
        <>
            {
                logado && <Redirect to="/" />
            }
            <p>Página Login</p>  
            <button onClick={ () => { setLogado(true) } } >Fazer login</button>
        </>
    );
}
