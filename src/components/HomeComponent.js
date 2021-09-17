// dependencies
import React from 'react';

// styles
import '../Styles/HomeStyles.css';

// components
import PostFeed from './PostFeedComponent';
import PostSender from './PostSenderComponent';

// redux

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 d-flex flex-column align-items-start ps-0 mt-2 py-2">
          <p>My Profile</p>
          <p>My Associates</p>
          <p>My Jobs</p>
          <p>My Projects</p>
          <p>Settings</p>
        </div>
        <div className="col-8">
          <PostSender />
          <PostFeed />
        </div>
        <div className="col-2">

        </div>
      </div>
    </div>
  )
}

export default Home
