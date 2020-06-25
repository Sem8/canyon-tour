import * as firebase from 'firebase';
import 'firebase/firestore';

const settings = {timestampsInSnapshots: true}

var firebaseConfig = {
    apiKey: "AIzaSyC7FaqIxAs7n8Oss2aT5d4UKpTqHYvNhww",
    authDomain: "canyontour-cd74f.firebaseapp.com",
    databaseURL: "https://canyontour-cd74f.firebaseio.com",
    projectId: "canyontour-cd74f",
    storageBucket: "canyontour-cd74f.appspot.com",
    messagingSenderId: "786449816287",
    appId: "1:786449816287:web:1db47923399e163b3ae76a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings(settings);

  export default firebase;