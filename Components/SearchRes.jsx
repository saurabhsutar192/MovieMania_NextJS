import React, { useState } from "react";
import { useSelector } from "react-redux";
import { baseImgURL } from "../endpoints";
import searchStyles from "../CSS/searchRes.module.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { useDispatch } from "react-redux";

import Desc from "./Desc";
import handleTrailer from "../handleTrailer";

function SearchRes() {
  let { searchRes, isActor } = useSelector((state) => state);
  let dispatch = useDispatch();

  let [clicked, setClicked] = useState(false);
  let [details, setDetails] = useState([]);

  return (
    <div>
      {searchRes.length !== 0 ? (
        !isActor ? (
          <div className={searchStyles.searchRes}>
            {searchRes.map((content) => {
              if (content.poster_path !== null) {
                return (
                  content.poster_path && (
                    <div
                      onClick={() => {
                        handleTrailer(content, dispatch);
                        setClicked(true);
                        setDetails(content);
                      }}
                      key={content.id}
                      className={searchStyles.searchedImg}
                    >
                      <img
                        src={baseImgURL + content.poster_path}
                        alt={content.original_title}
                      />{" "}
                    </div>
                  )
                );
              }
            })}
          </div>
        ) : (
          <div className={searchStyles.actorContainer}>
            {searchRes.map((actor) => {
              return (
                actor.profile_path && (
                  <div key={actor.id} className={searchStyles.actor}>
                    <div className={searchStyles.actorImg}>
                      {" "}
                      <img
                        src={baseImgURL + actor.profile_path}
                        alt={actor.name}
                      />
                    </div>
                    <div className={searchStyles.actorDesc}>
                      <div>
                        Name: <span>{actor.name}</span>
                      </div>
                      <div>
                        Known For :{" "}
                        <span>
                          {actor.known_for
                            .map(
                              (arr) => arr.original_title || arr.original_name
                            )
                            .join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        )
      ) : (
        <h1 className={searchStyles.nothing}>
          Nothing found! Try different keywords
        </h1>
      )}
      <div
        onClick={() => {
          dispatch({ type: "isSearched", payload: false });
        }}
        className={searchStyles.homeBtn}
      >
        <HomeRoundedIcon />
      </div>
      {clicked && <Desc setClicked={setClicked} details={details} />}
    </div>
  );
}

export default SearchRes;