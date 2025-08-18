import PlayBtn from "../assets/play.jsx";

const VideoTitle = ({title,overview}) => {
    return <div className="w-screen aspect-video pt-56 px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/2">{overview}</p>
        <div className="">
            <button className="bg-white shadow-amber-100 p-4 px-10 text-lg text-neutral-950 bg:opacity-50 rounded-xl gap-2 hover:opacity-80 transition delay-50">
                <PlayBtn/> Play
            </button>
            <button className=" mx-2 bg-white shadow-amber-100 p-4 px-10 text-lg text-neutral-950 bg:opacity-50 rounded-xl hover:opacity-80 transition delay-50">ℹ️More Info</button>
        </div>
    </div>
}

export default VideoTitle;