import React from "react";
import "./App.scss";
import AccessCard from "./Access";
import Color from "./Color";
import SrinkBox from "./SrinkBox";
import FetchUser from "./FetchUser";
import Vehicle from "./myVehicle/Vehicle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/my-vehicles" element={<Vehicle />} />
                    <Route path="/access-card" element={<AccessCard />} />
                    <Route path="/fetch-user" element={<FetchUser />} />
                    <Route path="/color" element={<Color />} />
                    <Route path="/shrink-box" element={<SrinkBox />} />

                </Routes>
            </Router>
        </div>
    )
};

export default App;