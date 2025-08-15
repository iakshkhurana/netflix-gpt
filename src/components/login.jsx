import { useRef, useState } from "react";
import Header from "./header";
import { checkValidData } from "../utils/validate";

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
        // Validate the form data
        console.log("Email:", email.current.value);
        console.log("Password:", password.current.value);
        const message = checkValidData(email.current.value, password.current.value);
        console.log("Validation message:", message);
        setError(message);
    }
    return (
        <div>
            <Header/>
            <div id="bg" className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/72bbcc46-904f-45ec-86cc-82f7e250734b/web/IN-en-20250728-TRIFECTA-perspective_789cb57d-abed-479d-b2db-bab4a94cab9c_small.jpg" alt="background"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 bg-black/75 w-3/12 my-36 mx-auto right-0 left-0">
                <h1 className="font-bold text-3xl py-4 text-amber-100">{isSignInForm?"Signin":"Signup"}</h1>
                    {!isSignInForm && <input type="text" ref={name}  placeholder="Name" className="p-3 my-2 w-full bg-gray-600 rounded-2xl"/>}
                    <input ref={email} type="text" placeholder="Email Address" className="p-3 my-2 w-full bg-gray-600 rounded-2xl"/>
                    <input ref={password} type="password" placeholder="Password" className="p-3 my-2 w-full bg-gray-600 rounded-2xl"/>
                    <p className="text-red-600">{error}</p>
                    <button type="button" className="p-4 my-4 hover:cursor-pointer bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>Sign In</button>
                    <p className="py-4 select-none text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already have an account? Sign In Now"}</p>
                </form>
        </div>
    )
}

export default Login;