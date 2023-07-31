import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* html에서 주소 인지 .. single페이지에선 필요 없겠지만 여러 페이지에선 ..필요함! */}
    <App />
  </BrowserRouter>
);


