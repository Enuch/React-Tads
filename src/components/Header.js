import React, { useState } from 'react';
import Logo from './img/nometads.png';


import './Header.css'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">TADS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">Apresentação</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/pedagogico">Pedagogico</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/calendario" tabindex="-1" >Calendário</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/noticias" tabindex="-1">Notícias</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/formulario" tabindex="-1">Formulário</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className='div-top'>
                <figure className='topo'>
                    <img src={Logo}/>
                </figure>
                <div className='topo2'>
                <h5>CURSO DE ANÁLISE E DESENVOLVIMENTO DE SISTEMAS | EAJ</h5>
                <h6>ESCOLA AGRÍCOLA DE JUNDIAÍ - EAJ</h6>
                <p><a href='http://www.graduacao.ufrn.br/tads' target='blank'>http://www.graduacao.ufrn.br/tads</a> | <span className='telefone'>Telefone/Ramal:</span> (84) 3342-2297/227</p>
                </div>
                
            </div>


        </header>

    );
}

export default Header;