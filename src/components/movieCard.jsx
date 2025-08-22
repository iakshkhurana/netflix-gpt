import { IMG_CONST } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    if(!posterPath) return null;
    return <div className="w-48 bg:opacity-70">
        <img alt="Movie Card" 
        src={IMG_CONST + posterPath}
        />
    </div>
}

export default MovieCard;