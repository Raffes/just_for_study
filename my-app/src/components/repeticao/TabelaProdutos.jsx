import React from "react";
import produtos from "../../data/produtos";
import './TabelaProdutos.css'

export default (props) => {

    function getListProducts() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'impar' : 'par' }>
                    <td> { produto.id } </td>
                    <td> { produto.nome } </td>
                    <td>R$ { produto.preco.toFixed(2).replace('.', ',') } </td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getListProducts()}
                </tbody>
                
            </table>

        </div>
    )
};