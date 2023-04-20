import firebase from 'firebase/app';

export interface FirebaseUser extends firebase.User {
  displayName?: string;
  emailVerified?: boolean;
  customClaims?: {
    role?: string;
  };
}
