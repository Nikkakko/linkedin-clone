import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  updateDoc,
  where,
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

export const postUserData = async () => {
  // check if user exists in the database  to prevent duplicate entries

  const q = query(userRef, orderBy('email', 'desc'));

  try {
    onSnapshot(q, snapshot => {
      const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredUser = users.filter(
        (user: any) => user.email === localStorage?.getItem('userEmail')
      );

      if (filteredUser.length === 0) {
        // add user to the database
        addDoc(userRef, {
          uid: auth.currentUser?.uid,
          username: auth.currentUser?.displayName,
          email: auth.currentUser?.email,
          photoURL: auth.currentUser?.photoURL,
          headline: '',
          company: '',
          college: '',
          location: '',
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCurretnUser = async (setCurrentUser: any) => {
  const unsubscribe = onSnapshot(userRef, snapshot => {
    const filteredUser = snapshot.docs
      .map(doc => ({
        userID: doc.id,
        ...doc.data(),
      }))
      .filter(
        (user: any) => user.email === localStorage?.getItem('userEmail')
      )[0]; // get the first user object that matches the email

    setCurrentUser(filteredUser);
  });

  return unsubscribe;
};

export const getSingleUser = (setCurrentProfile: any, uid: string) => {
  // get single user by uid from the database

  const q = query(userRef, orderBy('email', 'desc'));

  try {
    onSnapshot(q, snapshot => {
      const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredUser = users.filter((user: any) => user.uid === uid)[0];

      setCurrentProfile(filteredUser);
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleStatus = (setAllStatus: any, id: string) => {
  const singlePostQuery = query(docRef, where('userID', '==', id));
  onSnapshot(singlePostQuery, response => {
    setAllStatus(
      response.docs.map(docs => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const editProfile = async (object: any, id: string) => {
  const { username, headline, company, college, location } = object;
  //get document id
  const docRef = doc(userRef, id);

  try {
    await updateDoc(docRef, {
      username,
      headline,
      company,
      college,
      location,
    });
  } catch (error) {
    console.log(error);
  }
};
