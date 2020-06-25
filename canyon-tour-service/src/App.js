import React from "react";

import { Route, Link } from "react-router-dom";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { IonApp, IonContent } from "@ionic/react";

import TourOverview from "./components/TourOverview";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  links: {
    flexGrow: 2,
    color: "white",
    textDecoration: "none",
    marginRight: theme.spacing(4),

    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: 8,
  },
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
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                <Link
                  to={"/tourOverview"}
                  className={classes.links}
                  data-testid="home-link"
                >
                  {" "}
                  Discover{" "}
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <Route path="/tourOverview" component={TourOverview}></Route>
        {/* <TourOverview /> */}
      </IonContent>
    </IonApp>
  );
}

export default App;
