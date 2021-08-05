import { Provider } from "react-redux";
import { store } from "../redux";
import "../CSS/app.css";
import Header from "../Components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
