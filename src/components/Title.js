import React from 'react';
import './assets/css/title.css';


export const Title = ({ text }) => {
    const vocals = [...text];
    return <div className="title">
        <h1>
            {
                vocals.map(v => {
                    return <span>{v}</span>
                })
            }
        </h1>
    </div>

}
