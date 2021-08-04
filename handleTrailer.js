import * as trailer from "movie-trailer";

function handleTrailer(movie, dispatch) {
  movie.title
    ? trailer(null, { tmdbId: movie.id })
        .then((res) => {
          let urlId = new URLSearchParams(new URL(res).search);

          dispatch({ type: "setVideoId", payload: urlId?.get("v") });
        })
        .catch(() => {
          window.alert("No trailer found");
        })
    : setTimeout(() => window.alert("No trailer found"), 10);
  dispatch({ type: "removeTrailer" });
}
export default handleTrailer;
