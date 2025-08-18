import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    
    if(!movies) return null; // early return if movies is null/undefined
    
    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;
    console.log("MainContainer - movieId being passed:", id);
    
    return (
        <div className="relative w-full h-screen">
            <VideoBackground movieId={id}/>
            <VideoTitle title={original_title} overview={overview}/>
        </div>
    )
}

export default MainContainer;