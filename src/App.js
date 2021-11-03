import React, { useState } from 'react';
import Routes from './routes';
import './app.css';
import { ContextoUsuario } from './Services/context';

const App = () => {

    const [logado, setLogado] = useState(false);

    return (
        <>
            <ContextoUsuario.Provider value={{ logado, setLogado }} >
                <Routes />
            </ContextoUsuario.Provider>
        </>
    );

}

export default App;
