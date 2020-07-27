import React, { Component } from 'react'
import { Buscador } from './Buscador';
import MountCover from './MountCover';
import { Title } from './Title';

class ShowCharacters extends Component {
    render() {
        const list = this.props.characterList;
        return <>
            <Title text="Personajes" />
            <Buscador/>
            <section style={{ padding: 100 }}>
                <h1 style={{ width: "100%", marginLeft: 100 }}>Se han encontrado {list && list.length} Actores</h1>

                {
                    list.map(character => (
                        <div className="card" key={character.char_id}>
                            <MountCover line={character} />
                        </div>
                    ))
                }
            </section>
        </>;
    }
}

export default ShowCharacters;