const functions = require('firebase-functions');
const firebase = require('firebase');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

var config = {
  apiKey: "AIzaSyBl1oBG_zHBGpvKgEsEjUZH3jfM-TeANJQ",
  authDomain: "londonz-stage.firebaseapp.com",
  databaseURL: "https://londonz-stage.firebaseio.com",
  storageBucket: "londonz-stage.appspot.com",
};

firebase.initializeApp(config);
// const database = firebase.database();

exports.points = functions.https.onRequest((req, res) => {
  const userId = req.body.userId;
  const points = req.body.points;
  const words = req.body.lastword;
  const displayName = req.body.displayName;
  const level = req.body.level;

  return firebase.database().ref('users/' + userId).set({
    points,
    words,
    displayName,
    level
  }).then(function (response) {
    res.send(response);
  });
});

exports.users = functions.https.onRequest((req, res) => {
  return firebase.database().ref('/users/')
    .once('value').then(function (snapshot) {
      try {
        var users = snapshot.val();
        res.send({
          users
        });
      }
      catch (e) {
        console.log('there has been an error', e);
      }
    });
});

exports.details = functions.https.onRequest((req, res) => {
  const userId = req.params[0].split('/').pop();
  return firebase.database().ref('/users/' + userId)
    .once('value').then(function (snapshot) {
      try {
        var points = snapshot.val().points;
        var words = snapshot.val().words;
        var level = snapshot.val().level;
        res.send({
          points,
          words,
          level
        });
      }
      catch (e) {
        console.log('there has been an error', e);
      }
    });
});