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

const deleteCow = (cowId) => axios.delete(`${baseUrl}/cows/${cowId}.json`);
// delete method takes an axios call

export default { getCows, deleteCow };
