import farmerData from './farmerData';
import farmerCowData from './farmerCowData';
import cowData from './cowData';

// First we need the individual farmer - so we are going to move the function for the single famrer and put it here. Then we can simplify the function in the singleFarmer component and call the smash function below there.

const getSingleFarmerWithCows = (farmerId) => new Promise((resolve, reject) => {
  farmerData.getFarmerById(farmerId)
    .then((response) => {
      const farmer = response.data;
      farmer.id = farmerId;
      farmer.cows = [];
      farmerCowData.getFarmerCowsByFarmerUid(farmer.uid).then((farmerCows) => {
        console.log(('farmer cows'), farmerCows);
        // the function above gives us the farmer record - by ID
        // now - we need to 1-get all the farmerCows that have  this farmer Uid;
        // 2 - get all cows;
        cowData.getCows().then((allCows) => {
          console.log('all cows', allCows);
          // 3-smash
          farmerCows.forEach((farmerCow) => {
            const cow = allCows.find((x) => x.id === farmerCow.cowId);
            farmer.cows.push(cow);
          });
          // to do this we need a data file for farmerCows -so we will make that now and do an axios call to get that data
          resolve(farmer);
        });
      });
    })
    .catch((err) => reject(err));
});

const completelyRemoveCow = (cowId) => new Promise((resolve, reject) => {
  cowData.deleteCow(cowId)
    .then(() => {
      // what we need to do:
      // 1. get all the farmerCows records by cowId
      // 2. loop over all teh farmerCow reecord and delete the ones where the cowId is the same
      resolve();
    })
    .catch((err) => reject(err));
});

export default { getSingleFarmerWithCows, completelyRemoveCow };
