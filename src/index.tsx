import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import ImageChangeOnMouseOver from "./components/ImageChangeOnMouseOver";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/images" element={<ImageChangeOnMouseOver />}></Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
