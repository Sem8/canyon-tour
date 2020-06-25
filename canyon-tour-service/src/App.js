import React from "react";

import { Route } from "react-router-dom";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { IonApp, IonContent } from "@ionic/react";

import TourOverview from "./components/TourOverview";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navButton: {
    color: 'white',
    fontWeight: 'bold'
  }
}));

function App() {
  const classes = useStyles();

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <IonApp>
      <IonContent>
        <div className={classes.root}>
          <AppBar position="static" style={{background: '#ff8149'}}>
            <Toolbar>
              <Button className={classes.navButton} onClick={refreshPage}>Discover</Button>
            </Toolbar>
          </AppBar>
        </div>
        <Route path="/" component={TourOverview}></Route>
        {/* <TourOverview /> */}
      </IonContent>
    </IonApp>
  );
}

export default App;
