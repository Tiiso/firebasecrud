import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import fireDb from './firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBt76udVKppYYZ7LL3-tO7ArES2tY6Si3I",
  authDomain: "fir-crud-de18e.firebaseapp.com",
  databaseURL: "https://fir-crud-de18e-default-rtdb.firebaseio.com/",
  projectId: "fir-crud-de18e",
  storageBucket: "fir-crud-de18e.appspot.com",
  messagingSenderId: "935662309435",
  appId: "1:935662309435:web:1f613130ebc539424ecc1e"
};

// Initialize Firebase
//initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
