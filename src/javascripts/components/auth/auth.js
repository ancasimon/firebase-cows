import firebase from 'firebase/app';
import utils from '../../helpers/utils';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = '<button class="btn btn-danger">Google Login</button>';
  utils.printToDom('auth', domString);
  $('google-auth').click(signMeIn);
};

export default { loginButton };
