import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'


export default function Header(){
    return(
        <div className="header">
            <div className="header-content">
                <Link className="logo-link"to="/">
                    <div className="logo-container">
                        <img className="logo" src="../../src/assets/image/dente.png" alt="Imagem dente" />
                        <h1>Dentes Saudáveis</h1>
                    </div>
                </Link>
                <nav>
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/contact">Contato</Link>
                </nav>
            </div>
        </div>
    )
}