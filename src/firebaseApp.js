import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyB1H5-NQGczwVhzEacwOxKSTMwXK4DNwDg",
    authDomain: "turnout-172d8.firebaseapp.com",
    databaseURL: "https://turnout-172d8.firebaseio.com",
    projectId: "turnout-172d8",
    storageBucket: "turnout-172d8.appspot.com",
    messagingSenderId: "905633735116"
  };

  export const firebaseApp = firebase.initializeApp(config)
  export const eventsRef = firebaseApp.database().ref().child('events')
