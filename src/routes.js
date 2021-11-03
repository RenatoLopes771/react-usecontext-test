import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Content from './Pages/Content';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { ContextoUsuario } from './Services/context';

export default function Routes() {

    const { logado } = useContext(ContextoUsuario);
    
    return (
        <>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                {
                    logado && <Route exact path="/content" component={Content} />
                }
            </Router>
        </>
    );
}
