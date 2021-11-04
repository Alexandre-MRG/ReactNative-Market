// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAi1wo9_b-oPqGe1fpTcBPTVoNNLhLDOY",
  authDomain: "fir-metz-44bcc.firebaseapp.com",
  projectId: "fir-metz-44bcc",
  storageBucket: "fir-metz-44bcc.appspot.com",
  messagingSenderId: "464104140457",
  appId: "1:464104140457:web:793c912a94b2a46ce583b8"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

let app;

if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = app.firebase();
}

const auth = firebase.auth();
const db = firebase.firestore(app);

export {auth, db};