import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import { createStore, combineReducers, compose } from "redux";
import { createFirestoreInstance } from "redux-firestore";
import notifyReducers from "./reducers/notifyReducer";
import settingsReducers from "./reducers/settingsReducer";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB4O4-f52ZCz0OqIUGkJgBH-nO0cNSyYYE",
    authDomain: "react-client-panel-b802e.firebaseapp.com",
    databaseURL: "https://react-client-panel-b802e.firebaseio.com",
    projectId: "react-client-panel-b802e",
    storageBucket: "react-client-panel-b802e.appspot.com",
    messagingSenderId: "472423048467",
    appId: "1:472423048467:web:0f4f913bb709807e1126e6",
    measurementId: "G-21BNBTCSWM",
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
const firestore = firebase.firestore();

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notify: notifyReducers,
    settings: settingsReducers,
});

// Check for settings in local storage
if (localStorage.getItem("settings") == null) {
    // default settings
    const defaultSettings = {
        disableBalanceOnAdd: true,
        disableBalanceOnEdit: false,
        allowRegistration: false,
    };

    // set to local storage as string
    localStorage.setItem("settings", JSON.stringify(defaultSettings));
}

// Create store with reducers and initial state
const initialState = { settings: JSON.parse(localStorage.getItem("settings")) };

// Create store with reducers and initial state
const store = createStore(rootReducer, initialState);
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
};

export { store, rrfProps };
