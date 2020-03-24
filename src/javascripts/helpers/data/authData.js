import firebase from 'firebase/app';
import 'firebase/auth';

import farmhouse from '../../components/farmhouse/farmhouse';
import pasture from '../../components/pasture/pasture';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const farmhouseDiv = $('#farmhouse');
const logoutButton = $('#navbar-logout-button');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      farmhouseDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      pasture.buildCows();
      farmhouse.buildFarmers();
    } else {
      // person is not logged in
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      farmhouseDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
