import Recommendation from "../Components/Recommendation";

import { caller, endpoints } from "../endpoints";

export default function Home({ results }) {
  return <Recommendation recommendation={results} />;
}

export async function getServerSideProps() {
  let [trending, tv, action, comedy, horror, romance] = await Promise.all([
    caller.get(endpoints.fetchTrending),
    caller.get(endpoints.fetchTV),
    caller.get(endpoints.fetchActionMovies),
    caller.get(endpoints.fetchComedyMovies),
    caller.get(endpoints.fetchHorrorMovies),
    caller.get(endpoints.fetchRomanceMovies),
  ]);

  return {
    props: {
      results: {
        trending: trending.data.results,
        tv: tv.data.results,
        action: action.data.results,
        comedy: comedy.data.results,
        horror: horror.data.results,
        romance: romance.data.results,
      },
    },
  };
}
