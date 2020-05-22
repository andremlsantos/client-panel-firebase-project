import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "../src/components/layout/AppNavbar";

function App() {
    return (
        <Router>
            <div className="App">
                <AppNavbar></AppNavbar>
                <h1>Hello</h1>
            </div>
        </Router>
    );
}

export default App;
