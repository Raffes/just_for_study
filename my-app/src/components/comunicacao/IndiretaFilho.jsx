import React from 'react'

export default props => {

    const minIdade = 50
    const maxIdade = 20

    const gerarIdade = () => parseInt(Math.random() * maxIdade + minIdade)
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            
            <div>Filho</div>

            <button onClick={_ => {props.quandoClicar('João', gerarIdade(), gerarNerd())}}>
                Forcecer Informações
            </button>

        </div>
    )
}