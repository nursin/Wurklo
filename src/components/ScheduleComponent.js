// dependencies
import { Avatar } from '@material-ui/core';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

// styles
import '../Styles/ScheduleStyles.css';

function Schedule({ title, image, time, price }) {
  return (
    <div className="schedule__card text-start border shadow mb-3 p-2 d-flex align-items-center">
        <Avatar className="col-2" src={image} />
      <div className="col p-1">
        <div className="card__title">{title}</div>
        <div className="">{time}</div>
      </div>
        <div className="card__price col-3">${price}</div>
    </div>
  )
}

export default Schedule
