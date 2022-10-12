import React from "react";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
import RecommendVideo from "./recommend/RecommendVideo";

function Home() {
  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
        <RecommendVideo />
      </div>
    </div>
  );
}

export default Home;
