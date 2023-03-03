import './App.css';
import { useState   } from "react";
import { initializeApp } from "firebase/app";
import { getMoralisAuth } from '@moralisweb3/client-firebase-auth-utils';
import { signInWithMoralis } from '@moralisweb3/client-firebase-evm-auth';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBWQKo0ZoDbpvBFHG-PPO8pRXMHLkiPsVk",
  authDomain: "web3-d8ee8.firebaseapp.com",
  projectId: "web3-d8ee8",
  storageBucket: "web3-d8ee8.appspot.com",
  messagingSenderId: "387917561049",
  appId: "1:387917561049:web:658208b31c8179a96752c8",
  measurementId: "G-KSLB8V6ESE"
};

const app = initializeApp(firebaseConfig);
const moralisAuth = getMoralisAuth(app);
const auth = getAuth(app);

function App() {

  const [user, setUser]= useState(null);

  async function login(){

    const res = await signInWithMoralis(moralisAuth);
    setUser(res.credentials.user.uid)
  }

  async function logout(){

    await auth.signOut();
    setUser(null);
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Firebase Moralis Auth Extension 🔐
        </p>
        {!user ?
        
        <div className="searchButton" onClick={login}>Login</div>
        :
        <>
        <p>
          User:{user}
        </p>
        <div className="searchButton" onClick={logout}>Logout</div>
        </>
        }

        </header>
    </div>
  );
}

export default App;