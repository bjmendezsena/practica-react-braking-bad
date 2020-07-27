import React from 'react';

import './assets/css/buscador.css';

export const Buscador = ({type = "Ingresa un id"}) => {
    return (
        <div className="search-box">
            <input className="search-txt" type="text" placeholder={type} />
            <a className="search-btn" href="#">
                <i className="fas fa-search"></i>
            </a>
        </div>
    )
}
