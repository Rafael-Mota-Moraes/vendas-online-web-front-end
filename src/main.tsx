import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store/index";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
