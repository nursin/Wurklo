import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

function ChatMessage({ title, image, message }) {
    return (
        <Link className="scheduleCard" to="/profileinfo">
            <div className="row justify-content-end mx-1">
                <div className="scheduleCard__info col-12 text-start mb-1 p-2 d-flex align-items-center rounded">
                    <Avatar className="col-2 me-2" src={image} />
                    <div className="col p-1">
                        <div className="card__title">{title}</div>
                        <div className="">{message}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ChatMessage