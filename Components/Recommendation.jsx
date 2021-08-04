import Rows from "./Rows";
import { useEffect, useState } from "react";
import { caller, endpoints } from "../endpoints";

function Recommendation({ recommendation }) {
  return (
    <div>
      <Rows title={"Trending Now"} content={recommendation.trending} />
      <Rows title={"Discover TV"} content={recommendation.tv} />
      <Rows title={"Action"} content={recommendation.action} />
      <Rows title={"Comedy"} content={recommendation.comedy} />
      <Rows title={"Horror"} content={recommendation.horror} />
      <Rows title={"Romance"} content={recommendation.romance} />
    </div>
  );
}

export default Recommendation;
