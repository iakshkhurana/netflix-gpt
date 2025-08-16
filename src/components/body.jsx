import { Routes, Route, useNavigate } from "react-router-dom";
import Browse from "./browse";
import Login from "./login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("Auth state changed:", user ? "User signed in" : "No user");
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName} = user;
              console.log("User details:", {uid, email, displayName});
                dispatch(addUser({uid:uid, email:email, displayName:displayName}));
                navigate("/browse");
            } else {
              console.log("No user, navigating to login");
              dispatch(removeUser());
              navigate("/");
            }
        });
        
        // Cleanup function to unsubscribe from auth state changes
        return () => unsubscribe();
    }, [dispatch, navigate]);
    
    return (
        <div>
            <Routes>
                <Route path="/" element = {<Login/>}/>
                <Route path="/browse" element = {<Browse/>}/>
            </Routes>
        </div>
    )
}

export default Body;