
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDZsLjjU0IUv2a9qULHyWJMZOFCtl2g7_w",
    authDomain: "projeto-stranger-da7ca.firebaseapp.com",
    projectId: "projeto-stranger-da7ca",
    storageBucket: "projeto-stranger-da7ca.appspot.com",
    messagingSenderId: "889524110269",
    appId: "1:889524110269:web:8da1fed6e9580e3d8048d4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  
  export default app