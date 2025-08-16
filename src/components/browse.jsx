import Header from "./header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Browse = () => {
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("User signed out successfully");
        }).catch((error) => {
            console.log("Sign out error:", error);
        });
    };

    return (
        <div>
            <Header/>
            <div className="pt-20 px-8">
                <h1 className="text-white text-3xl font-bold">Browse Page</h1>
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

export default Browse;