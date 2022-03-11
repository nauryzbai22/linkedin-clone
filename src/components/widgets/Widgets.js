import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Today is 11.02.2022", "Top news - 9051 readers")}
      {newsArticle("14 february schools go to offline education", "Top news - 9051 readers")}
      {newsArticle("Chelsea loosed to Man United 1-2", "Footbal - 5212 readers")}
      {newsArticle("Weather to 11.02.2022: -15 C", "Weather - 2567 readers")}
      {newsArticle("Mercedes GL580 new car from Germany", "Cars - 8262 readers")}
    </div>
  );
}

export default Widgets;
