import React from 'react'

export default function Noticia() {
    return (
        <div className='bg-dark'>
            <div className='container text-secondary text-center bg-light border border-dark'>
                <h1><h1 className='badge bg-primary'>Notícias</h1></h1>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Data</th>
                            <th scope="col">Título</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">10/02/2021 10:11</th>
                            <td>Semana de defesa de Trabalhos de Conclusão de Curso - Ano/Semestre 2020.2</td>
                           
                        </tr>
                        <tr>
                            <th scope="row">10/02/2021 10:10</th>
                            <td>Calendário para projeto de Trabalho de Conclusão de Curso Ano/Semestre 2021.1</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">10/02/2021 10:08</th>
                            <td colspan="2">Plano de curso das turmas de 2020.2</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">10/02/2021 10:08</th>
                            <td colspan="2">Plano de curso das turmas de 2020.2</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">10/02/2021 10:08</th>
                            <td colspan="2">Plano de curso das turmas de 2020.2</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}