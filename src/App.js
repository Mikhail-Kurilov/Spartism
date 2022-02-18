import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoadPage from "./components/loadPage/LoadPage";
import MainPage from "./components/mainPage/MainPage";
import TextPage from "./components/textPage/TextPage";
import history from "./history";

function App() {
  return (
    <div className="app">
      <Header />
      <Router history={history} className="router">
        <Routes>
          <Route path="/" element={<LoadPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/text" element={<TextPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
