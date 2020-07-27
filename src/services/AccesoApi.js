
const BY_SERIES = 'series';
const BY_AUTHOR = 'author'

const BY_CHARACTERS = 'characters';
const BY_EPISODES = 'episodes';
const BY_QUOTES = 'quotes';
const BY_DEATHS = 'deaths'

const API_URL = 'https://www.breakingbadapi.com/api/';

export default class AccesoApi{
    static async readCharacters(id = 0){
        let route = API_URL + BY_CHARACTERS;
        if(id !== 0) route += '/'+id;

        return this.accesToApi(route);
    }

    static async readEpisodes(id = 0){
        let route = API_URL + BY_EPISODES;
        if(id !== 0)
            if(!isNaN(id)){
                route += '/' +id;
            }else{
                route += '?series=' + encodeURIComponent(id);
            }
        return this.accesToApi(route);
    }


    static async accesToApi(route){
        return await fetch(route)
            .then(res => res.json())
            .then(results => {
                console.log(results);
                return results;
            });
    }

    static async readQuotes(op = 0, value = ''){
        let route = API_URL + BY_QUOTES;

        if(op !== 0)
            if(!isNaN(op)){
                route += '/' +op;
            }else{
                route += '?' +op + '=' +encodeURIComponent(value);
            }
            return this.accesToApi(route);
    }

    static async readDeaths(id = ''){
        let route = API_URL + BY_DEATHS;
        if(id !== '') route += '?name=' +encodeURIComponent(id);
        return this.accesToApi(route);
    }
}