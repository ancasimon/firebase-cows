import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/cows.json`)
    .then((response) => {
      const demCows = response.data;
      console.error(demCows);
      const cows = [];
      if (demCows) {
        Object.keys(demCows).forEach((cowId) => {
          demCows[cowId].id = cowId;
          cows.push(demCows[cowId]);
        });
      }
      resolve(cows);
    })
    .catch((err) => reject(err));
});

// The response then mehtod is where we can take the objects from the database and chaneg them into an array of objects - and put the id inside the array (now it is outside as the object)
//  This last line for the catch just passes the error to the outside line
// Previously then was this: .then((response) => resolve(response.data))

//  the previous code - updateed with promises above
// const getCows = () => axios.get(`${baseUrl}/cows.json`);
// before we used to have return cows - but now we need to call the axios file

const getSingleCow = (cowId) => axios.get(`${baseUrl}/cows/${cowId}.json`);

const deleteCow = (cowId) => axios.delete(`${baseUrl}/cows/${cowId}.json`);
// delete method takes an axios call

const addCow = (newCow) => axios.post(`${baseUrl}/cows.json`, newCow);

const updateCow = (cowId, modifiedCow) => axios.put(`${baseUrl}/cows/${cowId}.json`, modifiedCow);
// // IMPORTANT: PUT method is an overwrite - so you have to pass the whole object!!! even if not all the values change!!!
// There is also an acios patch method you cna use if you want to update only one key-value pair - particularly great for a boolean property

export default {
  getCows,
  deleteCow,
  addCow,
  getSingleCow,
  updateCow,
};
