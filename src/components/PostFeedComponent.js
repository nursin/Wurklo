import React from 'react'
import Post from './PostComponent';

function PostFeed() {
    return (
        <>
            <Post
                user='Jamie Amy'
                timestamp='9/21/21 12:45 PM'
                image={'https://source.unsplash.com/random/800'}
                title='Cut my grass'
                text='Bring your own equipment'
                price={145}
            />
            <Post
                user='Jonny TuFas'
                timestamp='9/21/21 12:45 PM'
                image={'https://source.unsplash.com/random/100'}
                title='Write me a paper'
                text='Philosophy'
                price={45}
            />
            <Post
                user='Eric Derik'
                timestamp='9/21/21 12:45 PM'
                image={'https://source.unsplash.com/random/200'}
                title='Design me a logo'
                text='It for a coffee shop'
                price={95}
            />
            <Post
                user='Handy Main'
                timestamp='9/21/21 12:45 PM'
                image={'https://source.unsplash.com/random/500'}
                title='Clean up my yard'
                text='This project is for a porch'
                price={65}
            />
            <Post
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
