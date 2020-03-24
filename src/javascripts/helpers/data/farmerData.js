import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFarmers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/farmers.json`)
    .then((response) => {
      const exFarmers = response.data;
      const farmers = [];
      Object.keys(exFarmers).forEach((farmerId) => {
        exFarmers[farmerId].id = farmerId;
        farmers.push(exFarmers[farmerId]);
      });
      resolve(farmers);
    })
    .catch((err) => reject(err));
});

export default { getFarmers };
