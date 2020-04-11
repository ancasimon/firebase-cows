import firebase from 'firebase/app';
import 'firebase/auth';

import farmhouse from '../../components/farmhouse/farmhouse';
import pasture from '../../components/pasture/pasture';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const farmhouseDiv = $('#farmhouse');
const singleFarmerDiv = $('#single-farmer');
const newCowDiv = $('#new-cow');
const editCowDiv = $('#edit-cow');
const logoutButton = $('#navbar-logout-button');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      singleFarmerDiv.removeClass('hide');
      newCowDiv.removeClass('hide');
      editCowDiv.removeClass('hide');
      farmhouseDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      pasture.buildCows();
      pasture.pastureEvents();
      farmhouse.buildFarmers();
    } else {
      // person is not logged in
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      singleFarmerDiv.addClass('hide');
      newCowDiv.addClass('hide');
      editCowDiv.addClass('hide');
      farmhouseDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
