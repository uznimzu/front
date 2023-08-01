import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./js/pages/categoryPage";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="category" element={CategoryPage()} />
      </Routes>
    </Fragment>
  );
}

export default App;
