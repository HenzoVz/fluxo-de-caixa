import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAMx6IJtcOllsZsl-ZG1xcFP_z7nZDR0l4",
    authDomain: "newagent-hynlwk.firebaseapp.com",
    databaseURL: "https://newagent-hynlwk.firebaseio.com",
    projectId: "newagent-hynlwk",
    storageBucket: "newagent-hynlwk.appspot.com",
    messagingSenderId: "387686274405",
    appId: "1:387686274405:web:0a2fb9f8f7990086c37d8c"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;