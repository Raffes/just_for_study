import './App.css';
import React from 'react';

import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';

function App() {
  return (
    <div className="App">

    {/* Comunicação Indireta */}
    <IndiretaPai></IndiretaPai>

    {/* // Comunicação Direta */}
    {/* <DiretaPai></DiretaPai> */}

    {/* //////////////////////////////////////////////////////////////////////////// */}

      {/* <UsuarioInfo usuario={{ nome: 'Fernando'  }}></UsuarioInfo>
      <UsuarioInfo usuario={{ email: 'fernando@exemplo.com'  }}></UsuarioInfo> */}

      {/* <ParOuImpar numero={21}></ParOuImpar> */}
      
      {/* <TabelaProdutos></TabelaProdutos> */}
    
    </div>
  );
}

export default App;
