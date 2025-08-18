import GPTMovieSuggestions from "./gptmoviesuggestions";
import GPTSearchBar from "./gptsearchbar";

const GptSearch = () => {
    return (
        <div>
            <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/72bbcc46-904f-45ec-86cc-82f7e250734b/web/IN-en-20250728-TRIFECTA-perspective_789cb57d-abed-479d-b2db-bab4a94cab9c_small.jpg" alt="background"/>
            </div>
            <GPTSearchBar/>
            <GPTMovieSuggestions/>
        </div>
    )
}

export default GptSearch;