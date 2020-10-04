import React from 'react';
import {Home} from "./Pages/Home";
import { Route } from "react-router-dom";
import {Document} from "./Pages/Document";
import {Container} from "@material-ui/core";

function App() {
  return (
    <Container
        maxWidth="xl"
        style={{padding : 0}}
    >

        <Route exact path="/">
            <Home />
        </Route>

        <Route path="/doc">
            <Document />
        </Route>

    </Container>
  )
}

export default App;
