import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/scss/app.scss'
import {Provider} from "react-redux";
import {store} from "./redux/store";
import * as firebase from 'firebase/app';
import 'firebase/database';
import { HashRouter } from "react-router-dom";


firebase.initializeApp({
    apiKey: "AIzaSyA1EF5S1PcSeYvl53m7_LLkOTepNobBOpU",
    authDomain: "goggledocclone.firebaseapp.com",
    databaseURL: "https://goggledocclone.firebaseio.com",
    projectId: "goggledocclone",
    storageBucket: "goggledocclone.appspot.com",
    messagingSenderId: "580367898853",
    appId: "1:580367898853:web:ac4c7e853ffc66e43b1c0c"
});

ReactDOM.render(
    <Provider store={store} >
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
  document.getElementById('root')
);