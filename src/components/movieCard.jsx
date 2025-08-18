import { IMG_CONST } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    return <div className="w-48">
        <img alt="Movie Card" 
        src={IMG_CONST + posterPath}
        />
    </div>
}

export default MovieCard;