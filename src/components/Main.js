import React from 'react'
import Data from './Data'

export default function Main() {

    const peso = 'Ideal'
    const altura = 'Maior que você'
    const percentual = '100% gostoso'
    return(
        <main>
            <h2>Página TADS</h2>
            <p>Página do TADS melhoradas</p>
            <p>Usando tecnologias modernas</p>

            <Data 
                peso= {peso}
                altura= {altura} 
                percentual= {percentual}
            />
        </main>
    )
}