import React from 'react'
import Post from './PostComponent';

function PostFeed() {
  return (
    <>
      <Post
        image={'https://source.unsplash.com/random/800'}
        title='Build me a porch'
        text='This project is for a porch'
      />
      <Post
        image={'https://source.unsplash.com/random/100'}
        title='Build me a porch'
        text='This project is for a porch'
      />
      <Post
        image={'https://source.unsplash.com/random/200'}
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
    </>
  )
}

export default PostFeed;
