import React from "react";
// import Header from "./Header";
// import Sidebar from "./sidebar/Sidebar";
// import RecommendVideo from "./recommend/RecommendVideo";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SearchPage from "./SearchPage";


import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
         {/* <Header/> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/searchpage/:serachTerm" element={<SearchPage />} />

      </Routes>
     </div> 
    // </div>
  );
}

export default App;
