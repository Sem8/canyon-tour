import React, { useState, useEffect } from "react";

import firebase from "../firebaseConfig";

import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";

import "../styles/Reviews.css";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "yellow",
    fontSize: 40,
    paddingRight: "30%",
    marginTop: "20%",
    // marginRight: '5%'
  },
}));

const Reviews = () => {
  const classes = useStyles();

  const [allReviews, setAllReviews] = useState([]);
  const [topReview, setTopReview] = useState(0);
  const [totalReviewLength, setTotalReviewLength] = useState(0);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("Reviews").orderBy('rating', 'desc')
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs[0].data());
        let allReviewsFromFirebase = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('allReviewsFromFirebase: ', allReviewsFromFirebase);

        setAllReviews(allReviewsFromFirebase);
        setTotalReviewLength(allReviewsFromFirebase.length)
        setTopReview(allReviewsFromFirebase[0]['rating']);
      });

    return () => unsubscribe();
  }, []);

  console.log("allReviews: ", allReviews);

  return (
    <>
      <div className="review-wrapper">
        <div className="top-review">
          <StarIcon className={classes.root} />
          <h1 className="rating">{topReview}</h1>
        </div>
        <div className="total-reviews">{totalReviewLength} reviews</div>
      </div>
    </>
  );
};

export default Reviews;
