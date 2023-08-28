import "./styles/index.css";
import { Routes, Route } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

import Layout from "./majorComponents/Layout";
import { HomePage } from "./routes/HomePage";
import { Error } from "./routes/Error";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </Provider>
  );
}

export default App;
