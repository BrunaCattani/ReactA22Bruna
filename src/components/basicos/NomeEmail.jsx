import React from 'react'

export default function NomeEmail(props){

    return (
        <div>
            <h2>Informações</h2>
            <p><strong>Nome: </strong>{props.nome}</p>
            <p><strong>E-mail: </strong>{props.email}</p>
        </div>
    )
}


