import React, {Component} from 'react';
import AccesoApi from '../services/AccesoApi';
import { Loading } from './Loading';
import MountCoverEpisodes from './MountCoverEpisodes';
import ShowCharacters from './ShowCharacters';


class SearchManager extends Component {
    constructor() {
        super();
        this.state = {
            characterList: [],
            episodeList: [],
          }

          AccesoApi.readCharacters()
            .then(response => {
                this.setState(
                    {
                        characterList: response,
                    }
                );
            });
        
            // AccesoApi.readEpisodes()
            //     .then(response => {
            //         this.setState({
            //             episodeList: response,
            //         })
            //     });
    }
    render() { 
        let characterList = this.state.characterList;
        let episodeList = this.state.episodeList;
        return <section>
            
            {
                characterList ? <ShowCharacters characterList= {characterList}/>: ""
                //episodeList ? <MountCoverEpisodes line= {episodeList}/>: ""
            }
        </section>;
    }
}
 
export default SearchManager;