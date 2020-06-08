import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import AppNavbar from "../src/components/layout/AppNavbar";
import Dashboard from "../src/components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import { store, rrfProps } from "./store";
import "./App.css";
import ClientDetails from "./components/clients/ClientDetails";
import EditClient from "./components/clients/EditClient";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Settings from "./components/settings/Settings";
import {
    UserIsAuthenticated,
    UserIsNotAuthenticated,
} from "../src/helpers/auth";

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
                                    component={UserIsAuthenticated(Dashboard)}
                                ></Route>
                                <Route
                                    exact
                                    path="/client/add"
                                    component={UserIsAuthenticated(AddClient)}
                                ></Route>
                                <Route
                                    exact
                                    path="/client/:id"
                                    component={UserIsAuthenticated(
                                        ClientDetails
                                    )}
                                ></Route>
                                <Route
                                    exact
                                    path="/client/edit/:id"
                                    component={UserIsAuthenticated(EditClient)}
                                ></Route>
                                <Route
                                    exact
                                    path="/login"
                                    component={UserIsNotAuthenticated(Login)}
                                ></Route>
                                <Route
                                    exact
                                    path="/register"
                                    component={UserIsNotAuthenticated(Register)}
                                ></Route>
                                <Route
                                    exact
                                    path="/settings"
                                    component={UserIsAuthenticated(Settings)}
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
