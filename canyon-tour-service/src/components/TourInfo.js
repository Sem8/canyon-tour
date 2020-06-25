import React from "react";

import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

import "../styles/TourInfo.css";

const TourInfo = () => {
  return (
    <>
      <div className="tour-info-wrapper">
        <div className="tour-info-price">
          <LocalOfferOutlinedIcon
            style={{
              color: "#FF4500",
              background: "lightgray",
              padding: "5%",
              fontSize: '90',
              marginRight: "5%",
              borderRadius: "10px",
            }}
          />
          <div className="tour-info-price-text">
            <p>PRICE</p>
            <h2 style={{fontWeight: 'bold'}}>$158</h2>
          </div>
        </div>

        <div className="tour-info-duration">
          <QueryBuilderIcon
            style={{
              color: "#FF4500",
              background: "lightgray",
              padding: "5%",
              fontSize: 90,
              marginRight: "5%",
              borderRadius: "10px",
            }}
          />
          <div className="tour-info-duration-text">
            <p>DURATION</p>
            <h2 style={{fontWeight: 'bold'}}>3 hours</h2>
          </div>
        </div>
      </div>
      <div className="tour-info-description">
        <h6>
          During Antelope Canyon tour, you'll see how Antelope Canyon was formed
          - by millions of sand residues
        </h6>
      </div>
    </>
  );
};

export default TourInfo;
