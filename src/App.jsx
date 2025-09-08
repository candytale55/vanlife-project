import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import "./server"

import Layout from "./components/Layout";

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={< Layout/>} /> 
          </Routes>
      </BrowserRouter>
  );
}