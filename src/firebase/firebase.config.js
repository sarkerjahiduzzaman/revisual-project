/* Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYlbzNdTfYS1LyE6zXooNLWYOZUPfMotI",
  authDomain: "final-project-40005.firebaseapp.com",
  projectId: "final-project-40005",
  storageBucket: "final-project-40005.appspot.com",
  messagingSenderId: "41697739995",
  appId: "1:41697739995:web:71a7ce8b1433da2fbdb8fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;