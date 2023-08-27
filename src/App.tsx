import "./styles/index.css";
import { Routes, Route } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

import { Home } from "./routes/Home";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
