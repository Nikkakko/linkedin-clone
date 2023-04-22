import * as React from 'react';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { User, signOut } from 'firebase/auth';
import Loader from '../components/common/Loader';
import { StatusType } from '../types';
import { useNavigate } from 'react-router-dom';

interface UserContextValue {
  user: User | null;
  allStatuses: StatusType[];
  setAllStatuses: React.Dispatch<React.SetStateAction<StatusType[]>>;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
  allStatuses: [],
  setAllStatuses: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [allStatuses, setAllStatuses] = useState([] as StatusType[]);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = auth.onAuthStateChanged(firebaseUser => {
      setUser(firebaseUser);
      // signOut(auth);
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

  if (isLoading) {
    return <Loader />;
  }

  const contextValue = {
    user,
    allStatuses,
    setAllStatuses,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
