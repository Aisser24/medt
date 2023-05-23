import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/sites/Home";
import About from "./components/sites/About";
import New from "./components/sites/New";
import Upcoming from "./components/sites/Upcoming";
import Classics from "./components/sites/Classics"; 
import Impressum from "./components/sites/Impressum";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/about" Component={About}/>
                <Route path="/new-movies" Component={New}/>
                <Route path="/upcoming" Component={Upcoming}/>
                <Route path="/classics" Component={Classics}/>
                <Route path="/impressum" Component={Impressum}/>
            </Routes>
        </div>
    )
}

export default App;