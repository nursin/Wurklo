// dependencies
import React from 'react'
import Post from './PostComponent';

//images
import electricianJob from '../shared/electrician_job.jpg';
import designJob from '../shared/design_job.jpg';
import profilePic__test1 from '../shared/wurklo_profile_pic.jpg';
import profilePic__test2 from '../shared/michael_profile_pic.jpg';
import profilePic__test3 from '../shared/barbara_profile_pic.jpeg';
import profilePic__test6 from '../shared/nikki_profile_pic.jpg';



function PostFeed() {
    return (
        <>
            <Post
                profilePic = {profilePic__test1}
                user='Jaime Buntz'
                timestamp='9/21/21 12:45 PM'
                image={electricianJob}
                title='Return to Wurklo'
                text='Please send feedback about experience of our front-end only app, so we can build the app how you like it'
                feedback='Send Feedback'
                price={145}
            />
            <Post
                profilePic = {profilePic__test2}
                user='Mike Lendan'
                timestamp='9/21/21 12:45 PM'
                image={designJob}
                title='Design for idea'
                text='Health device design help'
                price={45}
            />
            <Post
                profilePic = {profilePic__test3}
                user='Eric Derik'
                timestamp='9/21/21 12:45 PM'
                image={'https://source.unsplash.com/random/200'}
                title='Design me a logo'
                text='It for a coffee shop'
                price={95}
            />
            <Post
                profilePic = {profilePic__test6}
                user='Handy Main'
                timestamp='9/21/21 12:45 PM'
                image={'https://source.unsplash.com/random/500'}
                title='Clean up my yard'
                text='This project is for a porch'
                price={65}
            />
            <Post
                profilePic = {profilePic__test1}
                user='Billy Jean'
                timestamp='9/21/21 12:45 PM'
                image={'https://source.unsplash.com/random/400'}
                title='Build me a porch'
                text='Its a small back porch'
                price={345}
            />
        </>
    )
}

export default PostFeed;
