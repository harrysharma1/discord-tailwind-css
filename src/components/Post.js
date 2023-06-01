import {React, useState} from 'react'

import { Popper,ClickAwayListener } from '@mui/base';
import {Avatar} from '@mui/material';
import * as BsIcons from 'react-icons/bs';
const Divider = () => <div className="sidebar-divider mt-[20px]"></div>;
const AboutMe = () => {
 return(
   <div>
         <p className="font-semibold text-[10px] uppercase">
            About me 
         </p>
         <p className="text-[8px]">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         </p>                   
   </div>
 )
}
const MemberSince = () => {
  return(
      <div>
          <p className="font-semibold text-[10px] uppercase">
             Discord member since
         </p>
         <p className="text-[8px]">
            Oct 20, 1999
         </p>
             
      </div>
  )
}
const Note = () => {
  return(
    <div>
           <p className="font-semibold text-[12px] uppercase">
            Note
         </p>
          <input
          className="outline-none bg-black text-white placeholder:text-[8px] text-[8px]"
          placeholder="Click to add a note"
          ></input>
             
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
 
   // const seed = Math.round(Math.random() * 100);
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
                <div className="flex bg-yellow-500 w-64 h-[400px] rounded-xl">
                    <div className="bg-gray-900 w-[85px] h-[85px] mt-[15px] ml-[15px] rounded-full fixed">         
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
                         <div className="fixed rounded-full opacity-50 hover:opacity-75 bg-black w-8 h-8 ml-[81.5%] mt-[2%] cursor-auto">
                         <BsIcons.BsPencilFill size={15} className="fixed opacity-100 text-white ml-[3.5%] mt-[3.5%] cursor-pointer"/>
     
                         </div>
                    )}
                 
     
                   
                    <div className="bg-gray-900 mt-16 w-64 rounded-b-xl"></div>
                    <div className="flex flex-col bg-black w-[205px] h-[260px]  fixed rounded-xl mt-[110px] ml-[25px]">
                        <p className="text-white font-semibold ml-[20px] mt-[20px]">{username}</p>
                        <p className="text-white ml-[20px] font-semibold text-xs">{username}#1234</p>
                        <Divider/>
                        <div className="text-white ml-[20px] mt-[10px]">
                            <AboutMe/>
                            <div className="mt-[10px]"/>
                            <MemberSince/>
                            <div className="mt-[10px]"/>
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



