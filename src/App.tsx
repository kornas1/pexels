import React from "react";
 import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Category from "./Pages/Category";
import "./i18n";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
