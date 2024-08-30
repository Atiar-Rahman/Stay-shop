import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';

const Login = () => {

   const [user,setUser] = useState();
   const auth = getAuth(app);
   const googleProvider = new GoogleAuthProvider();

   const handleGoogleSignIN = () => {
    signInWithPopup(auth,googleProvider)
    .then(result=>setUser(result.user))
    .catch(error=>console.log(error.message))
   }
   const handleSignOut = () =>{
    signOut(auth)
    .then()
    .catch(error=> console.error(error))
   }


   const handleSignIn =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,  password);
        signInWithEmailAndPassword(auth,email,password)
            .then(userCredential => setUser(userCredential.user))
        .catch(error=>console.log(error))
   }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <Link to='/sinup'><p className='text-center m-4'>already have an account and please signIn</p></Link>
                        {user ?
                            <button className='btn btn-secondary btn-outline' onClick={handleSignOut}>Sign Out</button> :
                            <button className='btn btn-primary btn-outline' onClick={handleGoogleSignIN}>Google SignIn</button>}
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Login;