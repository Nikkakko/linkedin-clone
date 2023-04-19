import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const LoginAPI = (email: string, passowrd: string) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, passowrd);
    return response;
  } catch (error) {
    return error;
  }
};

export const RegisterAPI = (email: string, password: string) => {
  try {
    let response = createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    return error;
  }
};
