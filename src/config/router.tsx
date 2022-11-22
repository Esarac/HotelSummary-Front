import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
//Pages
import Map from '../pages/MapPage'
import Rate from '../pages/RatePage'
import NotFound from '../pages/NotFoundPage'
import Search from "../pages/SearchPage";

const routes = (
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/map" />} />
            <Route path="/map" element={<Map/>} />
            <Route path="/rate" element={<Rate/>} />
            <Route path="/search" element={<Search/>}></Route>
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
)

export default routes;