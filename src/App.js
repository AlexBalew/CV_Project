import React from "react";
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Examples from "./Examples/Examples";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Examples/>
        </div>
    );
}

export default App;
