import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
const analytics = getAnalytics(app);
const firebaseConfig = {
  apiKey: AIzaSyCg1jV45IORg1fs1Zrgd7JI2n1d5T2um4o,
  authDomain: campusconnect-ai.firebaseapp.com,
  projectId: campusconnect-ai,
  storageBucket: campusconnect-ai.appspot.com,
  messagingSenderId: 1234567890,
  appId: 1:1234567890:web:abcdef123456,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);