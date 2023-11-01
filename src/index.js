import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Join from "./pages/Join";
import News from "./pages/News";
import Donate from "./pages/Donate";
import Mission from "./pages/Mission";


import Volunteersjoin from "./pages/Volunteersjoin";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('entre')
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="join" element={<Join />} />
          <Route path="contactus" element={<Join />} />
          <Route path="news" element={<News />} />
          <Route path="donate" element={<Donate />} />
          <Route path="mission" element={<Mission />} />
          <Route path="volunteer/join" element={<Volunteersjoin />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
