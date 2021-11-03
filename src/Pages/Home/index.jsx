import React from 'react';
import { Link } from 'react-router-dom';
import { ContextoUsuario } from '../../Services/context';
import Navbar from '../../Components/Navbar';

export default function Home() {
    
    const contexto = ContextoUsuario;

    return (
        <>
            <Navbar />
            <br />
            <p>Página Home</p>
        </>
    );
}