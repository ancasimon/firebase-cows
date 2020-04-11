import utils from '../../helpers/utils';
import cowData from '../../helpers/data/cowData';


// Note: we do want the cow data to propopulate the fields ont he Edit form > so we will do a get axios call that gets a single cow  - we will add a new mehtiod to get a single cow by id int he cowData file

const showForm = (cowId) => {
  cowData.getSingleCow(cowId)
    .then((response) => {
      const cow = response.data;
      console.log('single cow', cow);
      let domString = '';
      domString += '<h2 class="text-center">Edit Cow</h2>';
      domString += `<form class="col-10 offset-1 edit-cow-form-tag" id=${cowId}>`;
      domString += '<div class="form-group">';
      domString += '<label for="cow-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-cow-name" placeholder="Bessie" value=${cow.name}>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="cow-breed">Breed</label>';
      domString += `<input type="text" class="form-control" id="edit-cow-breed" placeholder="Jersey" value=${cow.breed}>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="cow-location">Location</label>';
      domString += '<input type="text" class="form-control" id="edit-cow-location" placeholder="On a farm">';
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="cow-weight">Weight (lbs)</label>';
      domString += `<input type="number" class="form-control" id="edit-cow-weight" placeholder=55 value=${cow.weight}>`;
      domString += '</div>';
      domString += '<button id="cow-edit-button" type="submit" class="btn btn-dark">Modify Cow</button>';
      domString += '</form>';

      utils.printToDom('edit-cow', domString);
    })
    .catch((err) => console.error('could not edit single cow', err));
};

export default { showForm };
