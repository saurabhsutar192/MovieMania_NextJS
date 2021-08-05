import { caller, endpoints } from "/endpoints";
import SearchRes from "/Components/SearchRes";

function SearchResContainer({ res, isActor }) {
  return <SearchRes searchRes={res} isActor={isActor} />;
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
      res: res.data.results,
      isActor: isActor,
    },
  };
}
