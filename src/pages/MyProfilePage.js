import React from 'react';
import Messenger from '../components/MessengerComponent';
import MyAssociates from '../components/MyAssociatesComponent';
import MyJobs from '../components/MyJobsComponent';
import MyProjects from '../components/MyProjectsComponent';
import ProfileCard from '../components/ProfileCardComponent';
import Schedule from '../components/ScheduleComponent';
import '../Styles/MyProfilePageStyles.css';

function MyProfilePage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-3 px-1 ps-lg-1 pe-lg-0 mb-2 mb-lg-0 order-3 order-lg-1">
                    {/* Messenger - this sidebar will become messenger component*/}
                    <h6 className="text-center p-2">Chat</h6>
                    <Messenger />
                </div>
                <div className="col col-lg-6 px-0 order-1">
                    <h6 className="text-center p-2">My Profile</h6>
                    <ProfileCard />
                    <MyJobs />
                    <MyProjects />
                    <MyAssociates />
                    {/* Scheduler (collapsable) */}
                    {/* Messenger (collapsable) */}

                </div>
                <div className="col-12 col-lg-3 px-0 order-2">
                    <h6 className="text-center p-2">Schedule</h6>
                    <Schedule />
                </div>
            </div>
        </div>
    )
}

export default MyProfilePage
