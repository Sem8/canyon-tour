import React from "react";

import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

const TourInfo = () => {
  return (
    <>
      <div className="tour-info-wrapper">
        <div className="tour-info-price">
          <LocalOfferIcon />
          <p>PRICE</p>
          <h2>$158</h2>
        </div>

        <div className="tour-info-duration">
          <QueryBuilderIcon />
          <p>DURATION</p>
          <h2>3 hours</h2>
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
