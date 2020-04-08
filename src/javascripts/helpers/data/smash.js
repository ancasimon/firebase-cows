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
      // the function above gives us the farmer record - by ID
      // now - we need to 1-get all the farmerCows that have  this farmer Uid;
      farmerCowData.getFarmerCowsByFarmerUid(farmer.uid).then((farmerCows) => {
        console.log(('farmer cows'), farmerCows);
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
      farmerCowData.getFarmerCowsByCowId(cowId).then((farmerCows) => {
        // 2. loop over all teh farmerCow reecord and delete the ones where the cowId is the same
        farmerCows.forEach((fCow) => {
          farmerCowData.deleteFarmerCow(fCow.id);
        });
        resolve();
      });
    })
    .catch((err) => reject(err));
});

const getCowsWithOwners = () => new Promise((resolve, reject) => {
  cowData.getCows()
    .then((cowsResponse) => {
      farmerData.getFarmers().then((farmerResponse) => {
        farmerCowData.getFarmerCows().then((farmerCowResponse) => {
          console.log('cowsResponse', cowsResponse);
          console.log('farmerResponse', farmerResponse);
          console.log('farmerCowResponse', farmerCowResponse);
          const finalCows = [];
          cowsResponse.forEach((oneCow) => {
            // const cow = {...oneCow };
            // cow.farmers = [];
            // this is the spread operator - ...copies it!/creates a new variable called cow and copies all the key-value pairs fromt he oneCow object. so after this, cow looks justlike oneCow. We are doign this because we want to add more to oneCow. Because we are allowed to modify the copy but we cannot modify the original object of oneCow. You can slo put it in a single line:--then we will loop over every farmer and make a copy of each and then add a property of isChecked and set it to false by default.
            const cow = { farmers: [], ...oneCow };
            const farmerCowOwners = farmerCowResponse.filter((x) => x.cowId === cow.id);
            farmerResponse.forEach((oneFarmer) => {
              const eachFarmer = { ...oneFarmer };
              const isOwner = farmerCowOwners.find((x) => x.farmerUid === eachFarmer.uid);
              // not owner : undefined !== undefined => false
              // are owner: {} - gets the object  !== undefined => true
              eachFarmer.isChecked = isOwner !== undefined;
              eachFarmer.farmerCowId = isOwner ? isOwner.id : `nope-${cow.id}-${eachFarmer.id}`;
              cow.farmers.push(eachFarmer);
            });
            finalCows.push(cow);
            console.log('final cows', finalCows);
          });
          console.log('final cows', finalCows);
          resolve(finalCows);
        });
      });
    })
    .catch((err) => reject(err));
});

// what the new object will look like:
// Note tyhat isChecked is a new key added to the owners' objects in the array on the farmerCow - we already have a getFarmers funciton int he farmerData   -that returns all famres and we cna use that.
// We have everythign here except the farmers array - the current funciton returns an array of all the cows.
// {
// id: 'cow1',
// breed: '',
//   location: '',
//   nameweigth
//   farmers: [ -- for this we check to see if they havea record in farmerCows for their name and this cow.
//     {age: 1000, name '', uid: '', isChecked}
//     {age: 1000, name '', uid: '', isChecked}
// ]
// }

export default { getSingleFarmerWithCows, completelyRemoveCow, getCowsWithOwners };
