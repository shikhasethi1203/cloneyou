import React from 'react'
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
import Search from "./Search";



function SearchPage() {
  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
        <Search />
    </div>
    </div>
  )
}

export default SearchPage;