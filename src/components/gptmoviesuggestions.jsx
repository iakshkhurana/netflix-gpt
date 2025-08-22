import { useSelector } from "react-redux";
import MovieList from "./movielist";

const GPTMovieSuggestions = () => {
    const gpt = useSelector(store => store.gpt);
    const {movieResults, movieNames} = gpt;
    if(!movieNames) return null;
    return <div className="p-4 m-4 bg-neutral-800 text-white">
        <div>
            {movieNames.map((movieNames, index) => <MovieList key = {movieNames} title={movieNames} movies={movieResults[index]}/>)}
        </div>
    </div>
}

export default GPTMovieSuggestions;