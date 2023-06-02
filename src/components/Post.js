import {React, useState} from 'react'

import { Popper,ClickAwayListener } from '@mui/base';
import {Avatar} from '@mui/material';
import * as BsIcons from 'react-icons/bs';
const Divider = () => <div className="sidebar-divider mt-[20px]"></div>;
const AboutMe = () => {
 return(
   <div>
         <p className="user-card-facts-title">
            About me 
         </p>
         <p className="user-card-facts-info">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         </p>                   
   </div>
 )
}
const MemberSince = () => {
  return(
      <div>
          <p className="user-card-facts-title">
             Discord member since
         </p>
         <p className="user-card-facts-info">
            Oct 20, 1999
         </p>
             
      </div>
  )
}
const Note = () => {
  return(
    <div>
          <p className="user-card-facts-title">
            Note
         </p>
          <textarea
          className="user-card-note-textarea"
          placeholder="Click to add a note"
          ></textarea>
             
    </div>
  )
}
const Post = ({
    username, 
    timestamp, 
    text,
    imageUrl,
    externalUrl,
   }) => {
   
  //  const seed = Math.round(Math.random() * 100);
   // https://avatars.dicebear.com/api/open-peeps/${seed}.svg
 
   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = (event) => {
     setAnchorEl(anchorEl ? null : event.currentTarget);
   };

   
   const open = Boolean(anchorEl);
 
   const handleClickAway = () => {
     setAnchorEl(null);
   };

   const id = open ? 'simple-popper' : undefined;
 
   return (
     <div className="post">
       <div className='avatar-wrapper'>
       <Avatar alt={username} src={imageUrl} />
       </div>
 
       <div className='post-content'>
         <p className='post-owner'>
          <button aria-describedby={id} type="button" onClick={handleClick} className="underline font-semibold outline-none"> 
            {username}
          </button>
          <Popper 
          id={id} 
          open={open} 
          anchorEl={anchorEl}
          placement='right-start'   
          >
                <ClickAwayListener onClickAway={handleClickAway}>
                <div className="user-card-base">
                    <div className="user-card-circle">         
                    </div>
                    <Avatar
                    sx={{
                        width: 75,
                        height: 75,
                        position: 'absolute',
                        left:20,
                        top:20,
                    }}
                    alt={username} src={imageUrl}
                    ></Avatar>
                    
                    {username==="Harry Sharma" &&(
                         <div className="edit-button-circle">
                         <BsIcons.BsPencilFill size={15} className="edit-button-icon"/>
     
                         </div>
                    )}
                    <div className="user-card-secondary"></div>
                    <div className="user-card-tertiary">
                        <p className="user-card-username">{username}</p>
                        <p className="user-card-username-full">{username}#1234</p>
                        <Divider/>
                        <div className="user-card-facts">
                            <AboutMe/>
                            <div className="user-card-info-space"/>
                            <MemberSince/>
                            <div className="user-card-info-space"/>
                            <Note/>
                        </div>
                    </div>
                </div>
                </ClickAwayListener>
          </Popper>
           <small className="timestamp">{timestamp}</small>
         </p>
         <div className='post-text'>
           {text}  
           {externalUrl && (
             <a href={externalUrl} className="font-bold font-mono underline text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">
               link.
             </a>
           )}
         </div>
          
       </div>
     
     </div>
   );
 };

export default Post



