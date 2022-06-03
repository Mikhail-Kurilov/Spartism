import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoadPage from "./components/loadPage/LoadPage";
import MainPage from "./components/mainPage/MainPage";
import TextPage from "./components/textPage/TextPage";
import Cognitivism from "./components/cognitivism/Cognitivism";
import Ascetism from "./components/ascetism/Ascetism";
import Progressivism from "./components/progressivism/Progressivism";
import Liberalism from "./components/liberalism/Liberalism";
import Secularization from "./components/secularization/Secularization";
import Monoculturalism from "./components/monoculturalism/Monoculturalism";
import FortyFour from "./components/fortyfour/FortyFour";

import history from "./history";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="routerFooterWrapper">
        <Router history={history} className="router">
          <Routes>
            <Route path="/" element={<LoadPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/main/cognitivism" element={<Cognitivism />} />
            <Route path="/main/ascetism" element={<Ascetism />} />
            <Route path="/main/progressivism" element={<Progressivism />} />
            <Route path="/main/liberalism" element={<Liberalism />} />
            <Route path="/main/secularization" element={<Secularization />} />
            <Route path="/main/monoculturalism" element={<Monoculturalism />} />
            <Route path="/text" element={<TextPage />} />
            <Route path="/*" element={<FortyFour />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
