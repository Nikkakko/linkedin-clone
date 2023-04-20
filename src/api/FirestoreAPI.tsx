import { addDoc, collection } from 'firebase/firestore';
import { auth, firestore } from '../firebaseConfig';

export const AddStatus = async (status: string) => {
  const docRef = await addDoc(collection(firestore, 'posts'), {
    status,
    uid: auth.currentUser?.uid,
    photoURL: auth.currentUser?.photoURL,
    username: auth.currentUser?.displayName,
    timestamp: Date.now(),
  });
};
