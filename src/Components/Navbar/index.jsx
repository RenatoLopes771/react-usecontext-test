import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextoUsuario } from '../../Services/context';
import './navbar.css';

export default function Navbar() {

    const { logado } = useContext(ContextoUsuario);

    return (
        <div className="navbarComponent" >
            <Link to="/">Home</Link><br />

            {
                logado
                ? <>
                    <Link to="/content">Conteudo</Link>
                </>

                : <>
                    <Link to="/login">Login</Link><br />
                </>
            }
        </div>
    );
}
