import { useRef, useState } from "react";
import Header from "./header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
    const [error,setError] = useState(null);
    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setError(message);
        if(message) return;
        
        if(!isSignInForm){
            // Signup Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("User signed up successfully:", user);
                setError(null);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Sign up error:", errorCode, errorMessage);
                setError(errorMessage);
            });
        }
        else{
            // Signin Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User signed in successfully:", user);
                setError(null);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Sign in error:", errorCode, errorMessage);
                setError(errorMessage);
            });
        }
    }
    return (
        <div>
            <Header/>
            <div id="bg" className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/72bbcc46-904f-45ec-86cc-82f7e250734b/web/IN-en-20250728-TRIFECTA-perspective_789cb57d-abed-479d-b2db-bab4a94cab9c_small.jpg" alt="background"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 bg-black/75 w-3/12 my-36 mx-auto right-0 left-0">
                <h1 className="font-bold text-3xl py-4 text-amber-100">{isSignInForm?"Sign In":"Sign Up"}</h1>
                    {!isSignInForm && <input type="text" ref={name}  placeholder="Name" className="p-3 my-2 w-full bg-gray-600 rounded-2xl"/>}
                    <input ref={email} type="text" placeholder="Email Address" className="p-3 my-2 w-full bg-gray-600 rounded-2xl"/>
                    <input ref={password} type="password" placeholder="Password" className="p-3 my-2 w-full bg-gray-600 rounded-2xl"/>
                    <p className="text-red-600">{error}</p>
                    <button type="button" className="p-4 my-4 hover:cursor-pointer bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className="py-4 select-none text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already have an account? Sign In Now"}</p>
                </form>
        </div>
    )
}

export default Login;