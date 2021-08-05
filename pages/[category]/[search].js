import { caller, endpoints } from "/endpoints";
import SearchRes from "/Components/SearchRes";
import router from "next/router";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

function SearchResContainer({ res, isActor }) {
  return (
    <div className="SearchResContainer">
      {res.length !== 0 ? (
        <SearchRes searchRes={res} isActor={isActor} />
      ) : (
        <h1 className="nothing">Nothing found! Try different keywords</h1>
      )}
      <div
        onClick={() => {
          router.push("/");
        }}
        className="homeBtn"
      >
        <HomeRoundedIcon />
      </div>
    </div>
  );
}

export default SearchResContainer;

export async function getServerSideProps(context) {
  let { category, search } = context.params;
  let res = [];
  let isActor = false;
  switch (category) {
    case "Movies":
      res = await caller.get(endpoints.searchMovie + search);
      isActor = false;
      break;
    case "TV Shows":
      res = await caller.get(endpoints.searchTV + search);
      isActor = false;
      break;
    case "People":
      res = await caller.get(endpoints.searchPeople + search);
      isActor = true;
      break;
    default:
      window.alert("something went wrong!");
  }

  return {
    props: {
      res: res.data.results.filter(
        (arr) => arr.profile_path != null || arr.poster_path != null
      ),
      isActor: isActor,
    },
  };
}
