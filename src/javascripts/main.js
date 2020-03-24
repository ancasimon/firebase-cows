import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';
import myNavBar from './components/myNavBar/myNavBar';

import 'bootstrap';
import './styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavBar.logoutEvent();
  $('body').on('mouseenter', '.farmer-card', (e) => e.target.closest('.card').classList.add('bg-warning'));
  // add a mouseneter event ont he body when you do somehting on the elements with a class of farmer-card
  // Use the event then find the closest card  then add a class of bg-warning to the class list.
  $('body').on('mouseleave', '.farmer-card', (e) => e.target.closest('.card').classList.remove('bg-warning'));
};

init();
