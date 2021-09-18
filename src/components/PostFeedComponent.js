import React from 'react'
import Post from './PostComponent';

function PostFeed() {
  return (
    <div>
      <Post
        image={'https://source.unsplash.com/random/800'}
        title='Build me a porch'
        text='This project is for a porch'
      />
      <Post
        image={'https://source.unsplash.com/random/700'}
        title='Build me a porch'
        text='This project is for a porch'
      />
      <Post
        image={'https://source.unsplash.com/random/600'}
        title='Build me a porch'
        text='This project is for a porch'
      />
      <Post
        image={'https://source.unsplash.com/random/500'}
        title='Build me a porch'
        text='This project is for a porch'
      />
      <Post
        image={'https://source.unsplash.com/random/400'}
        title='Build me a porch'
        text='This project is for a porch'
      />
    </div>
  )
}

export default PostFeed;
