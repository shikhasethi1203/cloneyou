import React from "react";
import "./Search.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./sidebar/ChannelRow";
import VideoRow from "./sidebar/VideoRow";

function Search() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="	https://yt3.ggpht.com/ytc/AMLnZu_GS4vuibuZjr4ZBgVr97RrriUQrrhqeyWQWqMYfQ=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="1.18M subscribers"
        noOfVideos={704}
        description="You can find awesome programming  lessons here! Also, expect programming  tips and tricks that will take your coding skills to the ..."
      />
      <hr />
      <VideoRow
        views="260K views"
        subs="4K"
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        channel="Clever Programmer"
        timestamp="Streamed 2 years ago"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to "
        image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
      />

      <VideoRow
        views="2.2M views"
        subs="4K"
        title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
        channel="Clever Programmer"
        timestamp="2 years ago"
        description="TABLE OF CONTENTS... ENJOY 1. Variables (2:47) 2. Functions (8:50) 3. Calendar (14:10) 4. If Else Statements (37:17) 5."
        image="	https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA-xXKxkdEcnQSRc2t89jCM32_R5g"
      />

      <VideoRow
        views="436k views"
        subs="4K"
        title="React JS Tutorial for Beginners - Full Course in 12 Hours [2021] by Clever Programmer 2 years ago 11 hours, 32 minutes 463,620 views"
        channel="Clever Programmer"
        timestamp="2 years ago"
        description="Here is the best free React JS programming  course on the planet. Made with lots of ❤️. "
        image="https://i.ytimg.com/vi/-cMqr9HpZ-Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBObe1ZE-8f36y5DRc6Dhwol-QOxg"
      />
     
      
      <VideoRow
        views="260K views"
        subs="4K"
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        channel="Clever Programmer"
        timestamp="Streamed 2 years ago"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to "
        image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
      />

      <VideoRow
        views="2.2M views"
        subs="4K"
        title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
        channel="Clever Programmer"
        timestamp="2 years ago"
        description="TABLE OF CONTENTS... ENJOY 1. Variables (2:47) 2. Functions (8:50) 3. Calendar (14:10) 4. If Else Statements (37:17) 5."
        image="	https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA-xXKxkdEcnQSRc2t89jCM32_R5g"
      />

      <VideoRow
        views="436k views"
        subs="4K"
        title="React JS Tutorial for Beginners - Full Course in 12 Hours [2021] by Clever Programmer 2 years ago 11 hours, 32 minutes 463,620 views"
        channel="Clever Programmer"
        timestamp="2 years ago"
        description="Here is the best free React JS programming  course on the planet. Made with lots of ❤️."
        image="https://i.ytimg.com/vi/-cMqr9HpZ-Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBObe1ZE-8f36y5DRc6Dhwol-QOxg"
      />
    </div>
  );
}

export default Search;
