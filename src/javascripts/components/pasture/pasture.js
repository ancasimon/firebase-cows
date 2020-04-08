import cowData from '../../helpers/data/cowData';
import smashData from '../../helpers/data/smash';
import utils from '../../helpers/utils';
import cowComponent from '../cow/cow';
import newCow from '../newCow/newCow';

// const buildCows = () => {
//   cowData.getCows()
//     .then((response) => console.error('get cows worked!', response.data))
//     .catch((err) => console.error('get cows broke', err));
// };

const removeCow = (e) => {
  const cowId = e.target.closest('.card').id;
  console.error('cowId', cowId);
  smashData.completelyRemoveCow(cowId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildCows();
      utils.printToDom('single-farmer', '');
    })
    .catch((err) => console.error('could not delete cow', err));
};

const makeCow = (e) => {
  e.preventDefault();
  // make a new cow object
  const newestCow = {
    name: $('#cow-name').val(),
    breed: $('#cow-breed').val(),
    location: $('#cow-location').val(),
    weight: $('cow-weight').val() * 1,
    // uid: firebase.auth().currentUser.uid,
  };
  console.log('newCow', newestCow);
  // save to Firebase
  cowData.addCow(newestCow)
  // .then((response) => console.log('response', response.data)) -- this is what you can use to se what's ocmeing back
    .then(() => {
      // reprint cows
      // eslint-disable-next-line no-use-before-define
      buildCows();
      utils.printToDom('new-cow', '');
    })
    .catch((err) => console.error('could not add a new cow', err));
};

const buildCows = () => {
  smashData.getCowsWithOwners()
    .then((cows) => {
      let domString = '';
      domString += '<h2 class="text-center">Pasture</h2>';
      domString += '<button id="show-add-cow-form" class="btn btn-danger">Add Cow</button>';
      domString += '<div class="d-flex flex-wrap">';
      cows.forEach((cow) => {
        domString += cowComponent.cowMaker(cow);
      });
      domString += '</div>';
      utils.printToDom('pasture', domString);
      $('body').on('click', '.delete-cow', removeCow);
      $('body').on('click', '#cow-create-button', makeCow);
      $('#show-add-cow-form').click(newCow.showForm);
    })
    .catch((err) => console.error('get cows broke', err));
};
// for the last line you can also do somethis like this:
// .catch((err) => utilsPrintToDom('pasture', 'data not available'));

export default { buildCows };
