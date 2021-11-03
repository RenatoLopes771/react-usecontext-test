import { createContext } from 'react';

export const ContextoUsuario = createContext({
    logado: false,
    nomeUsuario: '',
});
