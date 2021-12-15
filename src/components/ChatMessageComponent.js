import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

function ScheduleCard({ title, image, time, price }) {
    return (
        <Link className="scheduleCard" to="/profileinfo">
            <div className="row justify-content-end mx-1">
                <div className="scheduleCard__info col-12 text-start mb-1 p-2 d-flex align-items-center bg-white rounded">
                    <Avatar className="col-2" src={image} />
                    <div className="col p-1">
                        <div className="card__title">{title}</div>
                        <div className="">{time}</div>
                    </div>
                    <div className="card__price col-2 me-2">${price}</div>
                </div>
            </div>
        </Link>
    )
}

export default ScheduleCard