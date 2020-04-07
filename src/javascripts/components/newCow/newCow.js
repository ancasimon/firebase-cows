import utils from '../../helpers/utils';

const showForm = () => {
  let domString = '';
  domString += '<h2 class="text-center">New Cow</h2>';
  domString += '<form class="col-10 offset-1">';
  domString += '<div class="form-group">';
  domString += '<label for="cow-name">Name</label>';
  domString += '<input type="text" class="form-control" id="cow-name" placeholder="Bessie">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-breed">Breed</label>';
  domString += '<input type="text" class="form-control" id="cow-breed" placeholder="Jersey">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-location">Location</label>';
  domString += '<input type="text" class="form-control" id="cow-location" placeholder="On a farm">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-weight">Weight (lbs)</label>';
  domString += '<input type="number" class="form-control" id="cow-weight" placeholder=55>';
  domString += '</div>';
  domString += '<button id="cow-create-button" type="submit" class="btn btn-dark">Add Cow</button>';
  domString += '</form>';
  utils.printToDom('new-cow', domString);
};

export default { showForm };
