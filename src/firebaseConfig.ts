import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCrJJ9B2iVmWMA2Lj4omlxShDTk2h20I5k',
  authDomain: 'tinder-clone-17cb4.firebaseapp.com',
  projectId: 'tinder-clone-17cb4',
  storageBucket: 'tinder-clone-17cb4.appspot.com',
  messagingSenderId: '1004055408564',
  appId: '1:1004055408564:web:91e261721343d235d34ce1',
  measurementId: 'G-328C5HDT9R',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage();
