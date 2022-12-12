import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RouteWeb(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    )

}