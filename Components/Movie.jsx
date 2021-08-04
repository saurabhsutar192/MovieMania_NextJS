import React from "react";

function Movie({ title, img, desc }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="img">
        <img src={img} height="200" />
      </div>
      <div className="desc">{desc}</div>
    </div>
  );
}

export default Movie;
