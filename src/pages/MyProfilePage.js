import React from 'react';
import ProfileInfo from '../components/ProfileInfoComponent';
import '../Styles/MyProfilePageStyles.css';

function MyProfilePage() {
    return (
        <div className="container-fluid bg-light">
            <div className="row d-flex justify-content-center mb-3">
                <ProfileInfo />
            </div>
            <div className="row d-flex justify-content-center mb-3">
                <ProfileInfo />
            </div>
            <div className="row d-flex justify-content-center mb-3">
                <ProfileInfo />
            </div>
            <div className="row d-flex justify-content-center mb-3">
                <ProfileInfo />
            </div>
            <div className="row d-flex justify-content-center mb-3">
                <ProfileInfo />
            </div>
        </div>
    )
}

export default MyProfilePage
