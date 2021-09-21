import { Avatar } from '@material-ui/core';
import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardHeader } from 'reactstrap';
import '../Styles/ProfileInfoStyles.css';

function ProfileInfo() {
    return (
        <>
            <div className="custom-card d-flex align-items-center shadow bg-white mx-2">
                <img className="img-fluid profileInfo__image p-3" src="https://source.unsplash.com/random/800" alt="" />
                <div className="col d-flex-column justify-content-start">
                    <h3 className="col">Bobby Keel</h3>
                    <div className="col">34 yrs</div>
                    <div className="col">Registered Nurse</div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo
