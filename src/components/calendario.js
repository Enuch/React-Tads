import React from 'react'

export default function Calendario(props) {
    return (
        <div className='bg-dark'>
            <div className='container text-secondary text-center bg-light border border-dark'>
                <h1><h1 className='badge bg-primary'>Calendário</h1></h1>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">2020.1</h5>
                                <p class="card-text">
                                04/01/2021 à 11/01/2021
                                → Matrícula para o período 2020.1. <br/>
                                18/01/2021 à 19/01/2021
                                → Re-matrícula para o período 2020.1. <br/>
                                18/01/2021
                                → Início do período letivo 2020.1. <br/>
                                25/01/2021
                                → Início do período trancamento de turma 2020.1. <br/>
                                19/02/2021
                                → Término do período trancamento de turma 2020.1. <br/>
                                30/04/2021
                                → Término do período letivo 2020.1.</p>
                                <a  class="btn btn-primary">Primeiro semestre do ano</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">2020.2</h5>
                                <p class="card-text">
                                04/01/2021 à 11/01/2021
                                → Matrícula para o período 2020.2. <br/>
                                18/01/2021 à 19/01/2021
                                → Re-matrícula para o período 2020.2. <br/>
                                18/01/2021
                                → Início do período letivo 2020.2. <br/>
                                25/01/2021
                                → Início do período trancamento de turma 2020.2. <br/>
                                19/02/2021
                                → Término do período trancamento de turma 2020.2. <br/>
                                30/04/2021
                                → Término do período letivo 2020.2.</p>
                                <a href="#" class="btn btn-primary">Segundo semestre do ano</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}