// dependencies
import { Avatar } from '@material-ui/core';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

// styles
import '../Styles/ScheduleStyles.css';

function Schedule({ title, image, time, price }) {
    return (
        <div className="row justify-content-end">
            <div className="schedule__card text-start shadow mb-3 p-2 d-flex align-items-center col-xl-8 me-3">
                <Avatar className="col-2" src={image} />
                <div className="col p-1">
                    <div className="card__title">{title}</div>
                    <div className="">{time}</div>
                </div>
                <div className="card__price col-2 me-2">${price}</div>
            </div>
        </div>
    )
}

export default Schedule
