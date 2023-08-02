import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import { Fragment } from 'react';
import CateClick from './cateClickPage/cateClick';


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="cateClickPage" element={<CateClick />} />
        {/* <Route path="postClickPage" element={<PostClick />} /> */}
      </Routes>
    </Fragment>
  );
}
export default App;
