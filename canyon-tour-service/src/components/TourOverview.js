import React, { useState} from "react";

import firebase from "../firebaseConfig";

import Reviews from "./Reviews";
import Bookmark from "./Bookmark";
import TourInfo from "./TourInfo";
import BookTourForm from "./BookTourForm";


import "../styles/TourOverview.css";
import CameraAltRoundedIcon from "@material-ui/icons/CameraAltRounded";

import antelopeCanyon from "../images/antelopeCanyon.jpg";

const TourOverview = () => {
  const [image, setImage] = useState(antelopeCanyon);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    // e.persist();
    if (e.target.files[0]) {
      setFile(() => e.target.files[0]);
    }
  };

  const handleUpload = () => {
    let currentBackgroundImage = `${file.name}-${Date.now()}`;
    const uploadTask = firebase
      .storage()
      .ref(`images/${currentBackgroundImage}`)
      .put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // console.log("snapshot");
      },
      (error) => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref("images")
          .child(currentBackgroundImage)
          .getDownloadURL()
          .then((url) => {
            setImage(url);
          });
      }
    );
  };

  return (
    <>
      {/*  */}
      <div
        className="tour-overview"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="tour-title-wrapper">
          <h1 className="tour-title">Breathtaking Antelope Canyon Tour</h1>
          <br />
          <br />

          <CameraAltRoundedIcon
            style={{ color: "white" }}
            onClick={handleUpload}
          />
          <div className="photo-upload">
            <input type="file" onChange={handleChange} />
          </div>
        </div>
        <Reviews />
      </div>
      <Bookmark />
      <TourInfo />
      <BookTourForm />
    </>
  );
};

export default TourOverview;
