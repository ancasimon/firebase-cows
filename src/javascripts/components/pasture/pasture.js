import cowData from '../../helpers/data/cowData';
import utils from '../../helpers/utils';
import cowComponent from '../cow/cow';

// const buildCows = () => {
//   cowData.getCows()
//     .then((response) => console.error('get cows worked!', response.data))
//     .catch((err) => console.error('get cows broke', err));
// };

const buildCows = () => {
  cowData.getCows()
    .then((cows) => {
      let domString = '';
      domString += '<h2 class="text-center">Pasture</h2>';
      domString += '<div class="d-flex flex-wrap">';
      cows.forEach((cow) => {
        domString += cowComponent.cowMaker(cow);
      });
      domString += '</div>';
      utils.printToDom('pasture', domString);
    })
    .catch((err) => console.error('get cows broke', err));
};
// for the last line you can also do somethis like this:
// .catch((err) => utilsPrintToDom('pasture', 'data not available'));

export default { buildCows };
