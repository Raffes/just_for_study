import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformações(nome, idade, nerd) {
        
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

    }

    return (
        <div>
            <IndiretaFilho quandoClicar={fornecerInformações}></IndiretaFilho>
            <span>O pai dele se chama {nome}, ele tem a idade {idade} de anos e ele é um {nerd ? 'Verdadeiro' : 'Falso'} nerd</span>
            
         </div>
    )
}