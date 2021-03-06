import React from 'react'
import Messenger from '../components/MessengerComponent'
import ProfileCard from '../components/ProfileCardComponent'
import Schedule from '../components/ScheduleComponent'

function SearchProjectsPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="d-none d-lg-inline-flex col-lg-3 d-flex flex-column align-items-start ps-1 px-1">
                    {/* Messenger - this sidebar will become messenger component*/}
                    <Messenger />
                </div>
                <div className="col col-lg-6 px-0">
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                </div>
                <div className="d-none d-lg-block col-lg-3 px-0">
                    <Schedule />
                </div>
            </div>
        </div>
    )
}

export default SearchProjectsPage
