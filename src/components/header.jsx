import { LOGO, USERICON } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {toggleGptSearchView} from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    
    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };
    
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("User signed out successfully");
        }).catch((error) => {
            console.log("Sign out error:", error);
        });
    };

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
            <img className="w-32" src={LOGO} alt="logo"/>
            <div className="flex items-center">
                <button className="p-2 m-2 bg-gradient-to-b from-gray-400 via-sky-200 to-gray-400 text-black rounded-xl mr-5 mt-6 text-shadow-neutral-600 hover:opacity-80 transition duration-100 border-l border-red-200" onClick={handleGptSearchClick}>GPT Search</button>
                <img className="w-10 h-10 rounded mr-5 mt-4" alt="usericon" src={USERICON}/>
                <button 
                    onClick={handleSignOut}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default Header;