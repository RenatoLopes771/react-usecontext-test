import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { ContextoUsuario } from '../../Services/context';

export default function Login() {

    const context = useContext(ContextoUsuario);

    function fazerLogin() {
        context.logado = true;
    }

    return (
        <>
            {
                context.logado && <Redirect to="/" />
            }
            <p>Página Login</p>  
            <button onClick={ () => {fazerLogin()} } >Fazer login</button>
        </>
    );
}
