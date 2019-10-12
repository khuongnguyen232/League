import Axios from 'axios';
import {baseURLLink} from './baseURL';
//this is the API that used to pull data from Riot server

export default Axios.create({
    baseURL: baseURLLink
});
