import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/ProfileCardStyles.css';

function ProfileCard() {
    return (
        <Link to="/profileinfo" className="profileCard custom-card d-flex align-items-center shadow bg-white mx-lg-3 mb-3">
            <img className="col-5 col-lg-4 img-fluid profileCard__image" src="https://source.unsplash.com/random/800" alt="" />
            <div className="profileCard__info col-12 col-lg-4 d-bone d-lg-flex-column align-items-start align-self-start ps-2 py-3">
                <h5 className="profileCard__name">Bobby Keel</h5>
                <div className="d-flex flex-column flex-lg-row">
                    <div>
                        <div className="profileCard__rating d-flex">
                            {Array(5).fill().map((_, i) => (
                                <p>&#11088;</p>
                            ))}
                            <p className="ms-2 d-none d-lg-flex">Overall</p>
                        </div>
                        <div className="profileCard__rating d-none d-lg-flex">
                            {Array(5).fill().map((_, i) => (
                                <p>&#11088;</p>
                            ))}
                            <p className="ms-2">Completion</p>
                        </div>
                        <div className="profileCard__rating d-none d-lg-flex">
                            {Array(5).fill().map((_, i) => (
                                <p>&#11088;</p>
                            ))}
                            <p className="ms-2">Quality</p>
                        </div>
                        <div className="profileCard__rating d-none d-lg-flex">
                            {Array(5).fill().map((_, i) => (
                                <p>&#11088;</p>
                            ))}
                            <p className="ms-2">Integrity</p>
                        </div>
                    </div>
                    <div className="col-12 mt-lg-4 ms-lg-4 d-flex flex-column justify-content-between">
                        <div className="profileCard__skill mt-1">Registered Nurse</div>
                        <div className="profileCard__skill mt-1">Programmer</div>
                        <div className="profileCard__fee mt-1">$25/hr</div>
                        <div className="profileCard__reviews mt-1"></div>
                        <div className="profileCard__skill mt-1">Available in 3 days</div>
                    </div>
                </div>
            </div>
            {/* 
            <div className="profile__buttons d-flex ">
                <Button className="col col-md-6 col-lg-3 m-2 fs-6 fw-bold">
                    Hire
                </Button>
                <Button className="col col-md-6 col-lg-3 m-2 fs-6 fw-bold">
                    View
                </Button>
            </div> 
            */}
        </Link>
    )
}

export default ProfileCard
