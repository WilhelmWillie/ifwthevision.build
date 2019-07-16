import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAVivqKfg-mTrokq0c6MsPKB6VPA36oUPs",
  authDomain: "ifwthevision-build.firebaseapp.com",
  databaseURL: "https://ifwthevision-build.firebaseio.com",
  projectId: "ifwthevision-build",
  storageBucket: "",
  messagingSenderId: "786961406688",
  appId: "1:786961406688:web:436f076da13417dd"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const databaseRef = firebase.database().ref();

export const emailsRef = databaseRef.child("emails");
