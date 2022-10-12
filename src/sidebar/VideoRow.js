import React from 'react';
import "./VideoRow.css"

function VideoRow({  
    image,
    channel,
    subs,
    timestamp,
    title,
    views,
    description,
  }) {
  return (
    <div className="videoRow">
    <img src={image} alt=""/>
    <div className="videoRow_text">
    <h3>{title}</h3>
    <p className="vidoeRowText_headline">
    {channel} *
    <span className="videoRow_subs">
     <span className="videoRow_subNumber"> {subs}</span>  subscribers
     </span>
      {views} * {timestamp}
    </p>
    <p className="videoRow_description">{description}</p>
    </div>

    </div>
  )
}

export default VideoRow