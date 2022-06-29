import React from 'react'

export default () => {

    const min = 10
    const max = 20


    const sorteado = parseInt(Math.random() * (max - min)) + min; //Gerar números aleatórios



    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo: </strong>{min}</p>
            <p><strong>Valor Máximo: </strong>{max}</p>
            <p><strong>Valor Sorteado: </strong>{sorteado}</p>
        </div>
    )

}