import React from 'react';
import { Link } from 'react-router-dom';
import { ContextoUsuario } from '../../Services/context';
import './navbar.css';

export default function Navbar() {

    const contexto = ContextoUsuario;

    return (
        <div className="navbarComponent" >
            <Link to="/">Home</Link><br />

            {
                contexto.logado
                ? <>
                    <Link to="/conteudo">Conteudo</Link>
                </>

                : <>
                    <Link to="/login">Login</Link><br />
                </>
            }
        </div>
    );
}
