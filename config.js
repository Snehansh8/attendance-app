import  firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyDpNx7D6wKceGdTqGu5p5OaprC_b0D2kgc",
  authDomain: "project-c-60-40608.firebaseapp.com",
  databaseURL: "https://project-c-60-40608-default-rtdb.firebaseio.com",
  projectId: "project-c-60-40608",
  storageBucket: "project-c-60-40608.appspot.com",
  messagingSenderId: "49567895696",
  appId: "1:49567895696:web:ea60023a9261c576110815",
  measurementId: "G-3PS6X7EN7N"
};
firebase.initializeApp(firebaseConfig)

  export default firebase.database()
 

  