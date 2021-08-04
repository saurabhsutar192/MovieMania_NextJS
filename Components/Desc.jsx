import React from "react";
import YouTube from "react-youtube";
import CancelIcon from "@material-ui/icons/Cancel";
import ytStyles from "../CSS/youtube.module.css";
import { useSelector } from "react-redux";
function Desc({ setClicked, details }) {
  let { isTrailer, videoId } = useSelector((store) => store);
  return (
    <div className={ytStyles.youtubeContainer}>
      {isTrailer && (
        <div className={ytStyles.youtube}>
          <YouTube
            className={ytStyles.video}
            videoId={videoId}
            onEnd={() => setClicked(false)}
          />
        </div>
      )}
      <div className={ytStyles.contDesc}>
        <div>
          Name: <span>{details.title || details.original_name}</span>
        </div>
        {details.overview && (
          <div>
            Overview: <span>{details.overview}</span>
          </div>
        )}
        {details.release_date && (
          <div>
            Release Date: <span>{details.release_date}</span>
          </div>
        )}
        <div>
          Rating: <span>{details.vote_average}</span>
        </div>
      </div>

      <div onClick={() => setClicked(false)} className={ytStyles.cancel}>
        <CancelIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Desc;
