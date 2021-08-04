import React, { useRef, useState } from "react";
import { baseImgURL } from "../endpoints";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import rowStyles from "../CSS/rows.module.css";
import { useSelector, useDispatch } from "react-redux";
import handleTrailer from "../handleTrailer";
import Desc from "./Desc";

function Rows({ title, content }) {
  let { videoId } = useSelector((state) => state);
  let dispatch = useDispatch();
  const contentContainer = useRef();

  let [clicked, setClicked] = useState(false);
  let [details, setDetails] = useState([]);

  function scrollBack() {
    sideScroll(contentContainer.current, "left", 1, 500, 10);
  }
  function scrollNext() {
    sideScroll(contentContainer.current, "right", 1, 500, 10);
  }

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
      if (direction === "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  return (
    <div className={rowStyles.rows}>
      <h1 className={rowStyles.rowTitle}>{title}</h1>
      <div className={rowStyles.rowContainer}>
        <div onClick={scrollBack} className={rowStyles.before}>
          <NavigateBeforeIcon fontSize="large" />
        </div>
        <div ref={contentContainer} className={rowStyles.content}>
          {content.map((movie) => {
            return (
              movie.poster_path && (
                <div
                  key={movie.id}
                  onClick={() => {
                    handleTrailer(movie, dispatch);
                    setDetails(movie);
                    setClicked(true);
                  }}
                  className={rowStyles.movie}
                >
                  <div className={rowStyles.poster}>
                    <img
                      src={baseImgURL + movie.poster_path}
                      alt={movie.original_title}
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div onClick={scrollNext} className={rowStyles.after}>
          <NavigateNextIcon fontSize="large" />
        </div>
      </div>
      {clicked && (
        <Desc setClicked={setClicked} videoId={videoId} details={details} />
      )}
    </div>
  );
}

export default Rows;
