import cowData from '../../helpers/data/cowData';

const buildCows = () => {
  cowData.getCows()
    .then((response) => console.error('get cows worked!', response.data))
    .catch((err) => console.error('get cows broke', err));
};

export default { buildCows };
