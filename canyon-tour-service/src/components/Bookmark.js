import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import BookmarkIcon from "@material-ui/icons/Bookmark";

import "../styles/Bookmark.css";
const useStyles = makeStyles((theme) => ({
  unmarked: {
    color: "white",
    fontSize: 40,
  },
  bookmarked: {
    color: "#FF4500",
    fontSize: 40,
  },
}));

const Bookmark = () => {
  const classes = useStyles();

  const [bookmark, setBookMark] = useState(false);

  let handleBookmark = () => {
    setBookMark(!bookmark);
  };

  return (
    <div className="bookmark-wrapper">
      <button className="bookmark-button">
        <BookmarkIcon
          onClick={handleBookmark}
          className={bookmark ? classes.bookmarked : classes.unmarked}
        />
      </button>
    </div>
  );
};

export default Bookmark;
