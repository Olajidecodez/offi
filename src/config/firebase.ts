// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1QVToyDBGDvhqrMLnxApeInX-x0rKkrg",
  authDomain: "offi-20a57.firebaseapp.com",
  projectId: "offi-20a57",
  storageBucket: "offi-20a57.appspot.com",
  messagingSenderId: "483164136335",
  appId: "1:483164136335:web:e8f19823303b73bb8be1fa",
  measurementId: "G-CBTK5BPT69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);