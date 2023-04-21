import firebase from 'firebase/app';

export interface FirebaseUser extends firebase.User {
  displayName?: string;
  emailVerified?: boolean;
  customClaims?: {
    role?: string;
  };
}

export interface StatusType {
  id: string;
  photoURL: string;
  status: string;
  timestamp: firebase.firestore.Timestamp;
  uid: string;
  username: string;
}
