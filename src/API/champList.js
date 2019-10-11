import Axios from 'axios';

//this is the API that used to pull data from Riot server
export default Axios.create({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US'
});
