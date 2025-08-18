import { LOGO, USERICON } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
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