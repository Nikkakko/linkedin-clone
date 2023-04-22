import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { auth, firestore } from '../firebaseConfig';
import { StatusType } from '../types';

let docRef = collection(firestore, 'posts');
let userRef = collection(firestore, 'users');

// void type

export const AddStatus = async (status: string) => {
  try {
    await addDoc(docRef, {
      status,
      uid: auth.currentUser?.uid,
      photoURL: auth.currentUser?.photoURL,
      username: auth.currentUser?.displayName,
      email: auth.currentUser?.email,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const getStatus = async (setStatus: any) => {
  const q = query(docRef, orderBy('timestamp', 'desc'));
  try {
    onSnapshot(q, snapshot => {
      const status = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as StatusType[];
      setStatus(status);
    });
  } catch (error) {
    console.log(error);
  }
};

export const postUserData = async (object: any) => {
  const { username, email } = object;
  try {
    await addDoc(userRef, {
      username,
      email,
      uid: auth.currentUser?.uid,
      photoURL: auth.currentUser?.photoURL,
    });
  } catch (error) {
    console.log(error);
  }
};
