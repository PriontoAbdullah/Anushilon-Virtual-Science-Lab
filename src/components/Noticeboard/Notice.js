import { IconButton } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React from 'react';
import '../Labroom/Announcement.css';

const Notice = ({ image, name, date, content }) => {
  return (
    <div className="announcement">
      <div className="announcement__informationContainer">
        <div className="announcement__infoSection">
          <div className="announcement__imageContainer">
            <img src={image} alt="" />
          </div>
          <div className="announcement__nameAndDate">
            <div className="announcement__name text-base font-body font-semibold tracking-wider text-brand-900">
              {name}
            </div>
            <div className="announcement__date text-gray-700 font-body tracking-wide">
              {date}
            </div>
          </div>
        </div>
        <div className="announcement__infoSection">
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="announcement__content text-base font-body font-medium tracking-wider text-gray-900">
        {content}
      </div>
    </div>
  );
};

export default Notice;
