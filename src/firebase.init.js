// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAStg51SeqLlWbHzhjhD3LLHSpy8sNfN-0",
  authDomain: "killa-auth.firebaseapp.com",
  projectId: "killa-auth",
  storageBucket: "killa-auth.appspot.com",
  messagingSenderId: "1092795605245",
  appId: "1:1092795605245:web:ba6148d0c17c5cfed05e94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
