import React from 'react'
import Messenger from '../components/MessengerComponent'
import ProfileCard from '../components/ProfileCardComponent'
import Schedule from '../components/ScheduleComponent'

function SearchWorkersPage() {
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 d-none d-lg-inline-flex d-flex flex-column align-items-start ps-1 px-1">
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
            </div>
            <div className="d-none d-md-block col-lg-3 px-0">
                <Schedule
                    image='https://source.unsplash.com/random/850'
                    title='Clean trash from yard'
                    time='8:00 AM'
                    price={45}
                />
                <Schedule
                    image='https://source.unsplash.com/random/750'
                    title='Mow my lawn'
                    time='10:00 AM'
                    price={95}
                />
                <Schedule
                    image='https://source.unsplash.com/random/650'
                    title='Help me move'
                    time='12:00 PM'
                    price={65}
                />
                <Schedule
                    image='https://source.unsplash.com/random/550'
                    title='Cut my grass'
                    time='1:30 PM'
                    price={245}
                />
                <Schedule
                    image='https://source.unsplash.com/random/450'
                    title='Wash my dishes'
                    time='4:00 PM'
                    price={75}
                />
            </div>
        </div>
    </div>
    )
}

export default SearchWorkersPage
