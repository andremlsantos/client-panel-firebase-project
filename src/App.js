import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "../src/components/layout/AppNavbar";
import Dashboard from "../src/components/layout/Dashboard";

function App() {
    return (
        <Router>
            <div className="App">
                <AppNavbar></AppNavbar>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Dashboard}></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
