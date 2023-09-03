import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './componant/Login';
import Signup from "./componant/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './componant/Layout';
import SecretPage from './componant/SecretPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
        <Route path="/home" element={<SecretPage/>}/>
      </Routes>
    </BrowserRouter>
  </>
);

