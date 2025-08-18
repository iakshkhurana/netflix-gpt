import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    console.log("VideoBackground - movieId:", movieId);
    console.log("VideoBackground - trailerVideo:", trailerVideo);
    useMovieTrailer({movieId});
    if(!trailerVideo) return null;
    
    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10">
            <iframe 
                className="w-full h-full object-cover"
                src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo.key}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder="0"
            >
            </iframe>
        </div>
    )
}

export default VideoBackground;