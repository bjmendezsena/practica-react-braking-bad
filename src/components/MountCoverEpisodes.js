import React, { Component } from 'react';
import './assets/css/mountcoverepisodes.css';
import Episode from './Episode';
import { Title } from './Title';



class MountCoverEpisodes extends Component {
    render() {
        const line = this.props.line;
        console.log('Voy a mostrar la lista de episodios');
        console.log(line);
        // const {episode, season, series, title, characters} = line;
        return <>
            <Title text="Episodios" />

            {
                line && line.map(epi => {
                    const { episode, episode_id, season, series, title, characters } = epi;
                    console.log(title);
                    return <div key={episode_id} className='box2'>
                        <div className='imgBx2'>
                            <Episode num={episode} />
                        </div>
                        <div className="content2">
                            <h2>Ver por episodis<br />
                                <span>Ver cada episodio de la serie</span><br/>
                                <span>Series : {series}</span><br/>
                                <span>Personajes : {characters.map(per => {return per})}</span>
                            </h2>
                        </div>
                    </div>
                })
            }

        </>;

    }
}

export default MountCoverEpisodes;