import { Avatar } from '@material-ui/core';
import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardHeader } from 'reactstrap';

// styles
import '../Styles/PostStyles.css';

function Post({ user, timestamp, title, image, text, price }) {
    return (
        <div className="row justify-content-center">
            <div className="col-12 d-flex align-items-center justify-content-center">
                <Card className="mb-1">
                    <CardHeader className="d-flex align-items-center bg-white">
                        <Avatar className="col-1 me-2" src='https://source.unsplash.com/random/800' />
                        <div className="col-2">
                            <div className="fs-6 fw-bold">{user}</div>
                            <div className="post__timestamp">{timestamp}</div>
                        </div>
                        <div className="col">
                            <CardTitle className="fs-3">{title}</CardTitle>
                            <CardSubtitle>{text}</CardSubtitle>
                        </div>
                        <div className="card__price col-2 me-2 fs-3">${price}</div>
                    </CardHeader>
                    <CardImg className="post__image mb-5" src={image} alt="Card image cap" />
                </Card>
            </div>
        </div>
    )
}

export default Post
