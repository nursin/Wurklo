import React from 'react';
import { Accordion } from 'react-bootstrap';
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
                <div className="col-12 d-none d-lg-block col-lg-3 px-1 ps-lg-1 pe-lg-0 mb-2 mb-lg-0 order-3 order-lg-1">
                    {/* Messenger - this sidebar will become messenger component*/}
                    {/* <h6 className="text-center p-2">Chat</h6> */}
                    <Messenger />
                </div>
                <div className="col col-lg-6 px-0 order-1">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h5>My Profile</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <ProfileCard />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h5>My Jobs</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <MyJobs />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <h5>My Projects</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <MyProjects />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <h5>My Associates</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <MyAssociates />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="d-block d-lg-none" eventKey="4">
                            <Accordion.Header>
                                <h5>My Schedule</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <Schedule />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="d-block d-lg-none" eventKey="5">
                            <Accordion.Header>
                                <h5>My Communications</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <Messenger />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="d-none d-lg-block col-12 col-lg-3 px-0 order-2">
                    {/* <h6 className="text-center p-2">Schedule</h6> */}
                    <Schedule />
                </div>
            </div>
        </div>
    )
}

export default MyProfilePage
