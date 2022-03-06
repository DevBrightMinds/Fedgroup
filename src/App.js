import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeScreen from "./screens/Home";
import Completed from "./screens/InComplete";
import UsersDetails from "./screens/Dashboard";

import "./App.css";
import "./Bootstrap.css";

const App = () => {
    return <>
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<HomeScreen />} />
                <Route
                    exact
                    path="/incomplete"
                    element={<Completed />} />
                <Route
                    exact
                    path="/dashboard"
                    element={<UsersDetails />} />
            </Routes>
        </Router>
    </>
}

export default App;