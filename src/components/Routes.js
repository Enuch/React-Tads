import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Apresentacao from './Apresentacao'
import Pedagogico from './Pedagogico.js'
import Calendario from './calendario'
import Noticias from './Noticias'
import Formulario from './Formulario'

export default () => {

    return (
        <Switch>
            <Route exact path='/'>
                <Apresentacao/>
            </Route>
            <Route exact path='/pedagogico'>
                <Pedagogico/>
            </Route>
            <Route exact path='/calendario'>
                <Calendario/>
            </Route>
            <Route exact path='/noticias'>
                <Noticias/>
            </Route>
            <Route exact path='/formulario'>
                <Formulario/>
            </Route>
        </Switch>
    )
}