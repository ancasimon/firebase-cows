import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFarmerCowsByFarmerUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/farmerCows.json?orderBy="farmerUid"&equalTo="${uid}"`)
  // logic above = orde rbyth ething in the collection that you want =whic is equal to the thign that you are passing in to this function
    .then((response) => {
      const demFarmerCows = response.data;
      const farmerCows = [];
      // this gets us a list of objects > next, we are turning into an array and then looping over them:
      Object.keys(demFarmerCows).forEach((farmerCowId) => {
        // now we select the object specified inbrackets and then addign an array of Id to it equal to the object which is the id in our case
        demFarmerCows[farmerCowId].id = farmerCowId;
        farmerCows.push(demFarmerCows[farmerCowId]);
      });
      resolve(farmerCows);
    })
    .catch((err) => reject(err));
});

const getFarmerCowsByCowId = (cowId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/farmerCows.json?orderBy="cowId"&equalTo="${cowId}"`)
    .then((response) => {
      const demFarmerCows = response.data;
      const farmerCows = [];
      Object.keys(demFarmerCows).forEach((farmerCowId) => {
        demFarmerCows[farmerCowId].id = farmerCowId;
        farmerCows.push(demFarmerCows[farmerCowId]);
      });
      resolve(farmerCows);
    })
    .catch((err) => reject(err));
});


export default { getFarmerCowsByFarmerUid };
