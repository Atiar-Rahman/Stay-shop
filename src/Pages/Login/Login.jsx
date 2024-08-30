import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {

    const [user,setUser] = useState();
   const auth = getAuth(app);
   const googleProvider = new GoogleAuthProvider();

   const handleGoogleSignIN = () => {
    signInWithPopup(auth,googleProvider)
    .then(result=>setUser(result.user))
    .catch(error=>console.log(error))
   }
   const handleSignOut = () =>{
    signOut(auth)
    .then()
    .catch(error=> console.error(error))
   }
    return (
        <div>
            {user ?
            <button className='btn btn-secondary btn-outline' onClick={handleSignOut}>Sign Out</button>:
            <button className='btn btn-primary btn-outline' onClick={handleGoogleSignIN}>Google SignIn</button>}
            
        </div>
    );
};

export default Login;