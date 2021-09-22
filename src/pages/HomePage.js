// dependencies
import React from 'react';

// styles
import '../Styles/HomeStyles.css';

// components
import PostFeed from '../components/PostFeedComponent';
import PostSender from '../components/PostSenderComponent';
import Schedule from '../components/ScheduleComponent';
import Messenger from '../components/MessengerComponent';

// redux

function Home() {
    return (
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="d-none d-lg-inline-flex col-lg-3 d-flex flex-column align-items-start ps-0">
                    {/* Messenger - this sidebar will become messenger component*/}
                    <Messenger />
                </div>
                <div className="col col-lg-6">
                    {/* Popular Projects */}
                    <PostSender />
                    <PostFeed />
                </div>
                <div className="d-none d-lg-block col-lg-3">
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

export default Home