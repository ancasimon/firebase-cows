import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const buildFarmer = (e) => {
  const farmerId = e.target.closest('.card').id;
  smash.getSingleFarmerWithCows(farmerId)
    .then((singleFarmer) => {
      let domString = '';
      domString += '<h2 class="text-center">Featured Farmer</h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card border-dark mb-3" style="max-width: 18rem;">';
      domString += `<div class="card-header">Farmer ${singleFarmer.name}</div>`;
      domString += '<div class="card-body">';
      domString += `<h6 class="text-dark">Age: ${singleFarmer.age}</h6>`;
      domString += '<h3 class="card-title">Cow(s) Owned:</h3>';
      singleFarmer.cows.forEach((cow) => {
        domString += `<p class="card-text">${cow.name} (${cow.location})</p>`;
      });
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('single-farmer', domString);
    })
    .catch((err) => console.error('problem with single farmer', err));
};

// because this function gets executed when a click happens, then it gets an e as a param

export default { buildFarmer };
