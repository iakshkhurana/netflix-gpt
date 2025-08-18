import Header from "./header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./maincontainer";
import SecondaryContainer from "./secondarycontainer";

const Browse = () => {

    // Fetch Data from TMDB API and update store
    // creating custom hooks
    useNowPlayingMovies();
    usePopularMovies();

    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
            <div className="pt-20 px-8">
                <h1 className="text-white text-3xl font-bold">Browse Page</h1>
                
            </div>
        </div>
    )
}

export default Browse;