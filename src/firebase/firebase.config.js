
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

// export const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB5JOCLmYNkoPvkObPfJ0FvTZoY1bt-H8",
  authDomain: "portuguese-boss.firebaseapp.com",
  projectId: "portuguese-boss",
  storageBucket: "portuguese-boss.appspot.com",
  messagingSenderId: "423298151721",
  appId: "1:423298151721:web:aeded4dc37d73de505b338"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);