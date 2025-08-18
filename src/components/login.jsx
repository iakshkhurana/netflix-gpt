import React from 'react'
import Header from './header'
import { useState,useRef } from 'react'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
const [isSignInForm,setisSignInForm]= useState(true);
const [errorMsg,seterrorMsg]=useState(null);

const email=useRef(null);
const password=useRef(null);
const name=useRef(null);
const dispatch=useDispatch();

const toggleSignUpForm=()=>{
    setisSignInForm(!isSignInForm);
}

const handleButtonClick=()=>{
  // Validate the form data
  const emailValue = email.current?.value || "";
  const passwordValue = password.current?.value || "";

  const message = checkValidData(emailValue, passwordValue);
  seterrorMsg(message);

  if(message) return;

  //Sign In and Sign Up
  if(!isSignInForm){
    //Sign Up Logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user,{
          displayName: name?.current?.value,
          photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
        })
        .then(()=>{
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        })
        .catch((error)=>{
          seterrorMsg(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMsg(errorCode+'-'+errorMessage);
      });
  }
  else{
    //Sign In Logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User signed in successfully:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMsg(errorCode+"-"+errorMessage);
      });
  }
}


return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/72bbcc46-904f-45ec-86cc-82f7e250734b/web/IN-en-20250728-TRIFECTA-perspective_789cb57d-abed-479d-b2db-bab4a94cab9c_small.jpg" alt="background"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
            <h1 className='font-bold text-3xl pb-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            <input
                ref={email} 
                type='text' 
                placeholder='Email Address' 
                className='p-2 my-2 w-full bg-gray-600 text-white rounded'
            />
            {!isSignInForm && (
                <input 
                    ref={name} 
                    type='text' 
                    placeholder='Full Name' 
                    className='p-2 my-2 w-full bg-gray-600 text-white rounded'
                />
            )}
            <input 
                ref={password} 
                type='password' 
                placeholder='Password' 
                className='p-2 my-2 w-full bg-gray-600 text-white rounded'
            />
            <p className='py-2 text-red-600 font-bold'>{errorMsg}</p>
            <button className='py-4 my-6 bg-red-700 w-full rounded-lg hover:bg-red-800' onClick={handleButtonClick}>
                {isSignInForm?"Sign In":"Sign Up"}
            </button>
            <p className='py-2 cursor-pointer' onClick={toggleSignUpForm}>
                {isSignInForm?"New to Netflix? Sign Up Now":"Already A User? Sign In Now"}
            </p>
        </form>
    </div>
)
}

export default Login