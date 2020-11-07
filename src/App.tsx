import React from 'react';
import {Home} from "./Pages/Home";
import { Route, useLocation } from "react-router-dom";
import {Document} from "./Pages/Document";
import { home, documentPage } from './core/link';


function App() {

  const [reload, setReload] = React.useState(false)
  const location = useLocation();


  React.useEffect(() => {

      if (location.pathname === '/' && reload) {
          window.location.reload()
          setReload(false)
      }
      else {
          setReload(true)
      }

  }, [location])

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

        <Route exact path={home}>
            <Home />
        </Route>

        <Route path={`${documentPage}:key`}>
            <Document />
        </Route>

    </div>
  )
}

export default App;
