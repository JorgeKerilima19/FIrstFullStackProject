import "./styles/index.css";
import { Routes, Route } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

import Layout from "./majorComponents/Layout";
import { Error } from "./routes/Error";
import {
  HomePage,
  About,
  Blog,
  Careers,
  Contact,
  Services,
  Cases,
} from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </Provider>
  );
}

export default App;
