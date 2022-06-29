import React from 'react' //para utilizar as tags html, jsx
import './index.css'
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from './components/basicos/Fragmento'
import NumeroAle from './components/basicos/NumeroAle'
import NomeEmail from './components/basicos/NomeEmail'
import Modelo from './components/Modelo'
import './app.css'
import Nome from './components/basicos/Nome'
import Formulario from './components/basicos/Formulario'


export default function App(props) {
    return (
        <div className = 'app'>
            <h1>Fundamentos do React</h1>

            <div className = 'cards'>

                <Modelo titulo = "Formulário" color = "teal"> <Formulario/> </Modelo>

                <Modelo titulo="Utilizando UseState" color="violet"><Nome /></Modelo>

            <Modelo titulo = 'Primeiro componente' color = "yellow"> <Primeiro /> </Modelo>

            <Modelo titulo = 'Utilizando Parâmetros' color = "green"> <ComParametro titulo="Frio em SP" subtitulo="Neve" /> </Modelo>

            <Modelo titulo = 'Utilizando Parâmetros' color = "purple"> <ComParametro titulo="Calor no Rio de Janeiro" subtitulo="Chuva de verão" /> </Modelo>

            <Modelo titulo = 'Utilizando Parâmetros' color = "blue"> <ComParametro titulo="Start A22" subtitulo="Ser +" /> </Modelo>

            <Modelo titulo = 'Utilizando Fragmento' color = "brown"> <Fragmento/> </Modelo>

            <Modelo titulo = 'Números Aleatórios' color = "grey"> <NumeroAle/> </Modelo>

            <Modelo titulo = 'Informando nome e e-mail' color = "indigo"> <NomeEmail nome = 'Bruna' email = 'cnpbruna@gmail.com'/> </Modelo>

            <Modelo titulo = 'Informando nome e e-mail' color = "orange"> <NomeEmail nome = 'Luciane' email = 'lucattani@hotmail.com'/> </Modelo>

            <Modelo titulo = 'Informando nome e e-mail' color = "salmon"><NomeEmail nome = 'Gabriel' email = 'cattani2801@gmail.com'/></Modelo>







            </div>

        </div>

    )
}