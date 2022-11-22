import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
//Pages
import Map from '../pages/HotelsMap'
import NotFound from '../pages/NotFound'

const routes = (
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/map" />} />
            <Route path="/map" element={<Map/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
)

export default routes;