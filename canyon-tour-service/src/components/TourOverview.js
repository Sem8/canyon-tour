import React from "react";

import Reviews from './Reviews';
import Bookmark from './Bookmark';

import "../styles/TourOverview.css";

const TourOverview = () => {
  return (
    <>
    <div className="tour-overview">
      <div className="tour-title-wrapper">
        <h1 className="tour-title">Breathtaking Antelope Canyon Tour</h1>
      </div>
      <Reviews/>
      
    </div>
    <Bookmark/>
    </>
  );
};

export default TourOverview;
