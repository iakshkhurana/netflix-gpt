import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./browse";
import Login from "./login";

const Body = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Login/>}/>
                    <Route path="/browse" element = {<Browse/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Body;