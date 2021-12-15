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
        <div className="container-fluid">
            <div className="row">
                <div className="d-none d-lg-inline-flex col-lg-3 d-flex flex-column align-items-start ps-1 px-0">
                    {/* Messenger - this sidebar will become messenger component*/}
                    <Messenger />
                </div>
                <div className="col col-lg-6 px-0">
                    {/* Popular Projects */}
                    <PostSender />
                    <PostFeed />
                </div>
                <div className="d-none d-lg-block col-lg-3 px-0">
                    <Schedule />
                </div>
            </div>
        </div>
    )
}

export default Home
