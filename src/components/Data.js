import React from 'react'

export default function Data(props) {
    return(
        <section>
            <p>Peso: {props.peso}</p>
            <p>Altura: {props.altura}</p>
            <p>Percentual: {props.percentual}</p>
        </section>
    )
}