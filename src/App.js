import React, { useEffect, useState } from "react";
import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </SearchProvider>
  );
}

export default App;
