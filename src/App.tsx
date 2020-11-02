import React from 'react';
import {Home} from "./Pages/Home";
import { Route } from "react-router-dom";
import {Document} from "./Pages/Document";


function App() {

  return (
    <div
        style={{
            padding : 0,
            width : '100%',
            minWidth : '1140px',
            maxWidth : '2556px',
            margin : '0 auto'
        }}
    >

        <Route exact path="/">
            <Home />
        </Route>

        <Route path={"/doc/:key"}>
            <Document />
        </Route>

    </div>
  )
}

export default App;
