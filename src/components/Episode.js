import React from 'react';
import './assets/css/episode.css';

export  const Episode = ({num}) => {
    return (
        <div className="neon-wrapper">
            <span className="txt">Episodio num {num}</span>
            <span className="gradient"></span>
            <span className="dodge"></span>
        </div>
    )
}

 
export default Episode;