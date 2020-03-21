import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCows = () => axios.get(`${baseUrl}/cows.json`);
// before we used to have return cows - but now we need to call the axios file

export default { getCows };
