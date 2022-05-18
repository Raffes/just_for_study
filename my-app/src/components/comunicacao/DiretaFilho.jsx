import React from 'react'

export default props => {
    return (
        <div>
            <div>{props.nome} tem a idade de {props.idade} e ele totalmente {props.nerd ? 'Verdadeiro' : 'Falso'} nerd! </div>
        </div>
    )
}