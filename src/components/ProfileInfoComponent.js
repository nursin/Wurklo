import { Avatar, Button } from '@material-ui/core';
import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardHeader } from 'reactstrap';
import '../Styles/ProfileInfoStyles.css';

function ProfileInfo() {
    return (
        <div className="custom-card d-flex align-items-center shadow bg-white mx-3 mb-3">
            <img className="col-5 col-lg-4 img-fluid profileInfo__image m-3" src="https://source.unsplash.com/random/800" alt="" />
            <div className="profile__info col d-flex flex-column align-items-start align-self-start py-3">
                <h3 className="profile__name">Bobby Keel</h3>
                <div className="profile__age">34 yrs</div>
                <div className="profile__skill">Registered Nurse</div>
                <div className="profile__skill">Programmer</div>
                <div className="profile__buttons d-flex ">
                    <Button className="col col-md-6 col-lg-3 m-2 fs-6 fw-bold">
                        Hire
                    </Button>
                    <Button className="col col-md-6 col-lg-3 m-2 fs-6 fw-bold">
                        View
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
