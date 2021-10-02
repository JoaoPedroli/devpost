import React, { useState, createContext, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ loadingAuth, setLoadingAuth ] = useState(false);

  useEffect(() => {
    const loadStorage = async() => {
      const storageUser = await AsyncStorage.getItem('devApp');

      if(storageUser) {
        setUser(JSON.parse(storageUser));
        // setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  const signUp = async(name, email, password) => {
    setLoadingAuth(true);

    await auth().createUserWithEmailAndPassword(email, password)
    .then( async(ev) => {
      let uid = ev.user.uid;

      await firestore().collection('users').doc(uid).set({
        name,
      })
      .then(() => {
        let data = {
          uid,
          name,
          email: ev.user.email,
        };

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      });
    })
    .catch((error) => {
      alert(error);
      setLoadingAuth(false);
    });
  }

  const signIn = async(email, password) => {
    setLoadingAuth(true);

    await auth().signInWithEmailAndPassword(email, password)
    .then( async(ev) => {
      let uid = ev.user.uid;

      const userProfile = await firestore().collection('users')
      .doc(uid).get();

      let data = {
        uid,
        name: userProfile.data().name,
        email: ev.user.email,
      };

      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
    })
    .catch((error) => {
      alert(error);
      setLoadingAuth(false);
    });
  }

  const signOut = async() => {
    try {
      await auth().signOut();
      await AsyncStorage.clear();
      setUser(null);
    }
    catch(error) { alert(error) }
  }

  const storageUser = async(data) => {
    await AsyncStorage.setItem('devApp', JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
    value={{
      signed: Boolean(user),
      user,
      signUp,
      signIn,
      signOut,
      loadingAuth,
      loading,
    }}>
      { children }
    </AuthContext.Provider>
  );
}
