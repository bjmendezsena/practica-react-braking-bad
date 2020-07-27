import React, { Component } from 'react';
import './assets/css/mountcover.css'


class MountCover extends Component {
    render() {
        const line = this.props.line;
        console.log('Voy a mostrar la linea');
        console.log(line);
        // const style = {
        //     width: "25%",
        //     height: '500px',
        //     float: "left",
        //     marginRight: "20px",
        //     marginBottom: "50px",
        //     minWidth: '300px'
        // }
        return (
            <>
                <div className="box">
                    <div className="imgBx">
                        <img
                            src={line.img}
                            alt={line.name}
                        />
                    </div>

                    <div className="contentBx">
                        <div>
                            <h2>{line.name}</h2>
                            <p>Fecha de nacimiento: {line.birthday}</p>
                            <p>Ocupación: {line.occupation.map((ocupa, i) =>{
                                if(i < 1){
                                    return ocupa
                                }else{
                                    return ', ' +ocupa;
                                }
                            })}</p>
                            <p>Apodo: {line.nickname}</p>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default MountCover;