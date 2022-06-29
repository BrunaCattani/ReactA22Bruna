import ReactDOM from "react-dom"
import React from 'react'
import './index.css'
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"

const no = document.getElementById('root')

const texto = <h1>Boa tarde pessoal!!!</h1>

ReactDOM.render(

<div>
    {texto}
    <Primeiro/>
    <ComParametro titulo="Frio em SP" subtitulo="Neve"/>
    <ComParametro titulo="Calor no Rio de Janeiro" subtitulo="Chuva de verão"/>
    <ComParametro titulo="Start A22" subtitulo="Ser +"/>


</div>,


no)