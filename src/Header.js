import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      {/* <h1> I am a header </h1> */}
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header_logo"
            src="https://bseenlive.com/wp-content/uploads/2018/03/Youtube-Logo-Small.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header_input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        {/* <Link to={"/searchPage"}> */}
          <Link to={`/searchPage/${inputSearch}`} >
          <SearchIcon className="header_inputButton" />
        </Link>
        {/* </Link> */}
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          alt="Shikha Seth"
          src="https://yt3.ggpht.com/yti/AJo0G0mp4wkRcoOCNoUAhBPdXlOA-KIqZjtKjY9aR7ONSg=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}

export default Header;
