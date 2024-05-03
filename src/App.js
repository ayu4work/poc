import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store/sagaStore";
import Application from "./Application";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
