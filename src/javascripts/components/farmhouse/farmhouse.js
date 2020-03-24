import farmerData from '../../helpers/data/farmerData';
import utils from '../../helpers/utils';
import farmerComponent from '../farmer/farmer';

const buildFarmers = () => {
  console.error('you made farmers');
  farmerData.getFarmers()
    .then((farmers) => {
      let domString = '';
      domString += '<h2 class="text-center">Farmhouse</h2>';
      domString += '<div class="d-flex flex-wrap">';
      farmers.forEach((farmer) => {
        domString += farmerComponent.farmerBuilder(farmer);
      });
      domString += '</div>';
      utils.printToDom('farmhouse', domString);
    })
    .catch((err) => console.error('getFarmers broke', err));
};

export default { buildFarmers };
