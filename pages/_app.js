import { Provider } from "react-redux";
import { store } from "../redux";
import "../CSS/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
