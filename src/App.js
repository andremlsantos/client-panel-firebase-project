import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import {
    ReactReduxFirebaseProvider,
    firebaseReducer,
} from "react-redux-firebase";
import AppNavbar from "../src/components/layout/AppNavbar";
import Dashboard from "../src/components/layout/Dashboard";
import { store, rrfProps } from "./store";
import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <Router>
                    <div className="App">
                        <AppNavbar></AppNavbar>
                        <div className="container">
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={Dashboard}
                                ></Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </ReactReduxFirebaseProvider>
        </Provider>
    );
}

export default App;
