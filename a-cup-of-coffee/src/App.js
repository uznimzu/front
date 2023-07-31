import logo from './logo.svg';
import './App.css';
import {Router, Route} from "react-router";
import { Fragment } from 'react';
import cateClick from './cateClickPage/cateClick.js';


function App () {
  return (
    <Fragment>
      <Router>
        <Route path="/cateClickPage" component={cateClick}>
        </Route>
      </Router>
    </Fragment>
  );
}

export default App;
