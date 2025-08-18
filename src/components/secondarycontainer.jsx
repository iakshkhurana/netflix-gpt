import { useSelector } from "react-redux";
import MovieList from "./movielist";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
        <div className="bg-black w-full">
            <div className="relative z-20 -mt-52">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Popular"} movies={movies.popularMovies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;