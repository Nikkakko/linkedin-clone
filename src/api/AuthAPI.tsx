import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Navigate, useNavigate } from 'react-router-dom';

export const LoginAPI = (email: string, passowrd: string) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, passowrd);
    return response;
  } catch (error) {
    return error;
  }
};

export const RegisterAPI = async (
  email: string,
  password: string,
  displayName: string
) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update user's display name
    await updateProfile(userCredential.user, {
      displayName: displayName,
    });

    // Return the user credential
    return userCredential;
  } catch (error) {
    return error;
  }
};
export const GoogleLoginAPI = () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let response = signInWithPopup(auth, googleProvider);
    return response;
  } catch (error) {
    return error;
  }
};

export const onLogout = () => {
  try {
    auth.signOut();
  } catch (error) {
    return error;
  }
};
