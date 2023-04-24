import * as React from 'react';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { User, signOut } from 'firebase/auth';
import Loader from '../components/common/Loader';
import { StatusType } from '../types';
import { useNavigate } from 'react-router-dom';
import { getCurretnUser, postUserData } from '../api/FirestoreAPI';

interface UserContextValue {
  user: User | null;
  allStatuses: StatusType[];
  setAllStatuses: React.Dispatch<React.SetStateAction<StatusType[]>>;
  currentUser: any;
  setCurrentUser: any;
  currentProfile: any;
  setCurrentProfile: any;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
  allStatuses: [],
  setAllStatuses: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  currentProfile: null,
  setCurrentProfile: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [allStatuses, setAllStatuses] = useState([] as StatusType[]);
  const [currentProfile, setCurrentProfile] = useState<any>(null);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = auth.onAuthStateChanged(firebaseUser => {
      setUser(firebaseUser);
      getCurretnUser(setCurrentUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    //set local storage for user email

    if (user) {
      localStorage.setItem('userEmail', user?.email as string);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      postUserData();
    }
  }, [user]);

  if (isLoading) {
    return <Loader />;
  }

  const contextValue = {
    user,
    allStatuses,
    setAllStatuses,
    currentUser: currentUser,
    setCurrentUser,
    currentProfile,
    setCurrentProfile,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
