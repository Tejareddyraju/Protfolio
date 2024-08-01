import React from "react";
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Containers/Home';
import About from './Containers/About';
import Resume from './Containers/Resume';
import Skills from './Containers/Skills';
import Contact from './Containers/Contact';
import Navbar from "./Components/Navbar";


function App() {


    return (
        <div className="App">

            <Navbar />
            <div className="App-main-page-content">   <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes></div>
        </div>
    );
}

export default App;
