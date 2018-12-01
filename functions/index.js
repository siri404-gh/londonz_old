var functions = require('firebase-functions');
var firebase = require('firebase');
const cors = require("cors")
const express = require("express");

var config = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "londonz-stage.firebaseapp.com",
  databaseURL: "https://londonz-stage.firebaseio.com",
  storageBucket: "londonz-stage.appspot.com",
};

firebase.initializeApp(config);
var database = firebase.database();

// exports.leaderboard = functions.https.onRequest((req, res) => {
//   return database.ref('/users/')
//     .once('value').then(function (snapshot) {
//       try {
//         var users = snapshot.val();
//         res.send({
//           users,
//         });
//       } catch (e) {
//         return JSON.stringify({ error: true });
//       }
//     });
// });

// exports.crypt = functions.https.onRequest((req, res) => {
//   return database.ref('/crypts/')
//     .once('value').then(function (snapshot) {
//       try {
//         var crypts = snapshot.val();
//         res.send({
//           crypt: crypts[1],
//         });
//       }
//       catch (e) {
//         return JSON.stringify({ error: true });
//       }
//     });
// });

const app = express();
app.use(cors({ origin: true }));

app.post("/crypt/", (req, res) => {
  return database.ref('/crypts/')
    .once('value').then(function (snapshot) {
      try {
        var crypts = snapshot.val();
        res.send({
          crypt: crypts[1],
        });
      }
      catch (e) {
        return JSON.stringify({ error: true });
      }
    });
});

app.get("/leaderboard/", (req, res) => {
  return database.ref('/users/')
    .once('value').then(function (snapshot) {
      try {
        var users = snapshot.val();
        res.send({
          users,
        });
      } catch (e) {
        return JSON.stringify({ error: true });
      }
    });
});

const api = functions.https.onRequest(app);

module.exports = {
  api,
}