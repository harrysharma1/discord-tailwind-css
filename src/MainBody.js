import React from 'react'
import NavBar from './NavBar'

function MainBody() {
  return (
    <div className="main-body">
        <NavBar/>
        <div className="main-body-content">
        <Post
          username="Luffy"
          text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          timestamp="12 hours ago"
        />

        <Post
          username="Zoro"
          text="lorem sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          timestamp="8 hours ago"
        />


        <Post
          username="Sanji"
          text="
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          timestamp="6 hours ago"
        />


        <Post
          username="Brook"
          text="
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          "
          timestamp="5 hours ago"
        />

        <Post
          username="Robin"
          text="
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.    "
          timestamp="5 hours ago"
        />

        
        </div>
   
        
    
    </div>
  )
}
const Post = ({
   username, 
   timestamp, 
   text 
  }) => {

  const seed = Math.round(Math.random() * 100);
  return (
    <div className="post">
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {username}
          <small className="timestamp">{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const ChatBar = () => {
  return(
    <div className="search-bar">
      

    </div>
  ) 
}

export default MainBody
