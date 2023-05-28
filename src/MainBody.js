import React from 'react'
import NavBar from './NavBar'
import * as BsIcon from 'react-icons/bs'
function MainBody() {
  return (
    <div className="main-body">
        <NavBar/>
        <div className="main-body-content">
        <Post
          username="Luffy"
          text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          timestamp="12 hours ago"
          imageUrl="https://i.pinimg.com/originals/7e/4e/13/7e4e136037f8cd63909a685d814e3049.png"
        />

        <Post
          username="Zoro"
          text="lorem sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          timestamp="8 hours ago"
          imageUrl="https://w7.pngwing.com/pngs/202/343/png-transparent-roronoa-zoro-monkey-d-luffy-trafalgar-d-water-law-one-piece-pirate-warriors-zoro-one-piece-text-logo-jolly-roger.png"
        />


        <Post
          username="Sanji"
          text="
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          timestamp="6 hours ago"
          imageUrl="https://e7.pngegg.com/pngimages/313/542/png-clipart-vinsmoke-sanji-monkey-d-luffy-roronoa-zoro-tony-tony-chopper-jolly-roger-jolly-white-flag.png"
        />


        <Post
          username="Brook"
          text="
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          "
          timestamp="5 hours ago"
          imageUrl="https://w7.pngwing.com/pngs/971/274/png-transparent-brook-monkey-d-luffy-usopp-roronoa-zoro-tony-tony-chopper-one-piece-jolly-roger-smiley-piracy.png"
        />

        <Post
          username="Robin"
          text="
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.    "
          timestamp="4 hours ago"
          imageUrl="https://w7.pngwing.com/pngs/968/450/png-transparent-nico-robin-nami-monkey-d-luffy-one-piece-jolly-roger-petal-purple-face-hat.png"
        />

        <Post
          username="Nami"
          text="
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.    "
          timestamp="4 hours ago"
          imageUrl="https://w7.pngwing.com/pngs/878/117/png-transparent-nami-monkey-d-luffy-one-piece-brook-shanks-one-piece-text-manga-jolly-roger.png"
        />

        <Post
          username="Franky"
          text="
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.    "
          timestamp="2 hours ago"
          imageUrl="https://www.pinclipart.com/picdir/big/237-2376826_franky-jolly-roger-png-clipart-franky-roronoa-zoro.png"
        />
         <Post
          username="Chopper"
          text="
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.    "
          timestamp="1 hours ago"
          imageUrl="https://www.clipartmax.com/png/middle/173-1731493_flag-chopper-2-v-one-piece-chopper-jolly-roger.png"
        />
        <Post
          username="Jinbei"
          text="
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.    "
          timestamp="30 minutes ago"
          imageUrl="https://w7.pngwing.com/pngs/360/845/png-transparent-monkey-d-luffy-usopp-t-shirt-nami-roronoa-zoro-jinbei-jolly-roger-piracy-flower.png"
        />

        


        
        </div>
   
        <ChatBar/>

    </div>
  )
}
const Post = ({
   username, 
   timestamp, 
   text,
   imageUrl
  }) => {

  // const seed = Math.round(Math.random() * 100);
  // https://avatars.dicebear.com/api/open-peeps/${seed}.svg
  return (
    <div className="post">
      <div className='avatar-wrapper'>
        <img src={`${imageUrl}`} alt='' className='avatar' />
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
    <div className="chat-bar">
      <BsIcon.BsFillPlusCircleFill size={22} className="text-green-500 dark:shadow-lg mx-2  dark:text-primary cursor-pointer"/>
      <input className="chat-bar-input" type="text" placeholder="Search..." />
    </div>
  ) 
}

export default MainBody
