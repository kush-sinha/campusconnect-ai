import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
const analytics = getAnalytics(app);
const firebaseConfig = {
  apiKey: 'AIzaSyDorG892FuLeknQlSwOjyeswGxZ7cmiD_0',
  authDomain: 'campusconnect-ai.firebaseapp.com',
  projectId: 'campusconnect-ai',
  storageBucket: 'campusconnect-ai.appspot.com',
  messagingSenderId: '1234567890',
  appId: '1:1234567890:web:abcdef123456',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);