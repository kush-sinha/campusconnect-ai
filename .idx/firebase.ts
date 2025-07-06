import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyD4Ph_o7alzwdTl-WgSZsDj0cWLqJWLS7o',
  authDomain: 'campusconnect-ai.firebaseapp.com',
  projectId: 'campusconnect-ai',
  storageBucket: 'campusconnect-ai.appspot.com',
  messagingSenderId:' 1234567890',
  appId: '1:1234567890:web:abcdef123456',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);