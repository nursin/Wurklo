import React from 'react';
import { Accordion } from 'react-bootstrap';
import Messenger from '../components/MessengerComponent';
import MyAssociates from '../components/MyAssociatesComponent';
import MyJobs from '../components/MyJobsComponent';
import MyProjects from '../components/MyProjectsComponent';
import ProfileCard from '../components/ProfileCardComponent';
import Schedule from '../components/ScheduleComponent';
import '../Styles/MyProfilePageStyles.css';

// need rounded corners accordion
// move accordion to its own component called profile or something

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
                                <h5>Profile</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <ProfileCard />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h5>Jobs</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <MyJobs />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <h5>Projects</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <MyProjects />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <h5>Associates</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <MyAssociates />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                <h5>Schedule</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <Schedule />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                <h5>Chat</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <Messenger />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>
                                <h5>Mentor</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <Messenger />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>
                                <h5>Legal</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <Messenger />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>
                                <h5>Accounting</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <Messenger />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header>
                                <h5>Insurance</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <Messenger />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="10">
                            <Accordion.Header>
                                <h5>Marketing</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <Messenger />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="11">
                            <Accordion.Header>
                                <h5>Collaborate</h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <Messenger />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="12">
                            <Accordion.Header>
                                <h5>Business Statistics</h5>
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
