import React from "react";
import "./App.css";

import { IonApp, IonContent } from "@ionic/react";

import TourOverview from './components/TourOverview';



function App() {
  return (
    <IonApp>
      <IonContent>
        <div className="App">          
        </div>
        <TourOverview/>
      </IonContent>
    </IonApp>
  );
}

export default App;
