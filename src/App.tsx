import React from 'react';
import {Home} from "./Pages/Home";
import { Route } from "react-router-dom";
import {Document} from "./Pages/Document";

function App() {
  return (

    <div className="App">

        <Route exact path="/">
            <Home />
        </Route>

        <Route path="/doc">
            <Document />
        </Route>

    </div>

  )
}

export default App;
