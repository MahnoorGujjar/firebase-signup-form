
  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js"; 

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyCbujGgDCP5iIh_mifG2fJmtXBocftF0e8",
    authDomain: "fir-sign-up-form-d62de.firebaseapp.com",
    projectId: "fir-sign-up-form-d62de",
    storageBucket: "fir-sign-up-form-d62de.firebasestorage.app",
    messagingSenderId: "550274190473",
    appId: "1:550274190473:web:c4c43855ba554ce1094a58",
    measurementId: "G-N46FH7JFJN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app); // Initialize Firebase Authentication 


  document.getElementById('signup-form').addEventListener('submit' , (e) => {
    e.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    //create user with email and password

    createUserWithEmailAndPassword(auth, email, password)    
     .then((userCredential) => {      
     console.log("User signed up:", userCredential.user);  
    alert("Signup successful!");  
   }) 
    .catch((error) => {    
     console.error("Error:", error.message);    
     alert("Error: " + error.message); 
    
    }); 
  })