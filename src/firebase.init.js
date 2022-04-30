// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxmQKbm2gHbKOeTecdYGxAMESOoP-qZD0",
    authDomain: "mobile-warehouse-a4bf9.firebaseapp.com",
    projectId: "mobile-warehouse-a4bf9",
    storageBucket: "mobile-warehouse-a4bf9.appspot.com",
    messagingSenderId: "195722611515",
    appId: "1:195722611515:web:655a480d7981ea880a051e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;