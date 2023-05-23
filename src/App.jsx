import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/sites/Home";
import About from "./components/sites/About";
import New from "./components/sites/New";
import Upcoming from "./components/sites/Upcoming";
import Classics from "./components/sites/Classics"; 
import Impressum from "./components/sites/Impressum";
import content from "../content";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={content.links.home} Component={Home}/>
                <Route path={content.links.about} Component={About}/>
                <Route path={content.links.new} Component={New}/>
                <Route path={content.links.upcoming} Component={Upcoming}/>
                <Route path={content.links.classics} Component={Classics}/>
                <Route path={content.links.impressum} Component={Impressum}/>
            </Routes>
        </div>
    )
}

export default App;