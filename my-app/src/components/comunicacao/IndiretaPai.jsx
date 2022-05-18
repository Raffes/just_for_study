import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    function fornecerInformações(nome, idade, nerd) {
        
        console.log('O pai se chama '+ nome+', ele tem a idade '+idade+' anos e ele é um '+nerd+' nerd')
    }

    return (
        <div>
            
            <div>Pai</div>

            <IndiretaFilho quandoClicar={fornecerInformações}></IndiretaFilho>
            
         </div>
    )
}