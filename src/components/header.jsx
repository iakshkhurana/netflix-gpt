import { LOGO, SUPPORTED_LANGUAGES, USERICON } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {toggleGptSearchView} from "../utils/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const langKey = useSelector((store) => store.config.lang);
    
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

    const handleLanguageChange = (e) =>{
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
            <img className="w-32" src={LOGO} alt="logo"/>
            <div className="flex items-center">
                
                {
                    user && (
                        <select className="p-2 bg-gradient-to-r from-gray-700 to-gray-900 dropdown rounded-lg text-white mr-3 mt-4" onChange={handleLanguageChange} value={langKey}>
                            {
                                SUPPORTED_LANGUAGES.map(lang => 
                                    <option key={lang.identifier} value={lang.identifier}>
                                        {lang.name}
                                    </option>
                                )
                            }
                        </select>
                    )
                }
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