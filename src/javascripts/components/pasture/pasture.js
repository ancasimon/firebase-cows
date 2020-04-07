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

const buildCows = () => {
  cowData.getCows()
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
      $('#show-add-cow-form').click(newCow.showForm);
    })
    .catch((err) => console.error('get cows broke', err));
};
// for the last line you can also do somethis like this:
// .catch((err) => utilsPrintToDom('pasture', 'data not available'));

export default { buildCows };
