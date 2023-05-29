import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as BootstrapIcons from 'react-icons/bs'
import { motion } from 'framer-motion'
function Sidebar() {
  const handleEmail = () => {
    window.location.href="mailto:harrysharma1066@gmail.com" 
  }


  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col dark:bg-gray-900 bg-white text-white shadow-lg">
        <SidebarIcon icon={<FaIcons.FaGithub size={28} onClick={event=>window.location.href="https://github.com/harrysharma1"}/>} text="harrysharma1"/>
        <Divider/>
        <SidebarIcon icon={<FaIcons.FaLinkedin size={32} onClick={event=>window.location.href="https://www.linkedin.com/in/harry-sharma-567b21225/"}/>}text="harry-sharma-567b21225"/>
        <SidebarIcon icon={<BootstrapIcons.BsDiscord size={20} onClick={event=>window.location.href="https://discordapp.com/users/discordapp.com/users/RetroASIAN123#7619"}/>} text="RetroASIAN123#7619"/>
        <SidebarIcon icon={<BootstrapIcons.BsMailbox2 size={20} onClick={handleEmail}/>}text="harrysharma1066@gmail.com"/>
        <Divider/>
        <SidebarIcon icon={<BootstrapIcons.BsFillFileEarmarkTextFill size={20} />}text="Click to download CV"/>
      
    </div>
  )
}

const SidebarIcon = ({icon,text}) => (
    <div className="sidebar-icons group">
        <motion.div whileTap={{scale:0.9}} transition={{stiffness:2,power:5}}>
             {icon}  
        </motion.div> 
    <span className="sidebar-tooltip group-hover:scale-100">
        {text}
    </span>
    </div>
);

SidebarIcon.defaultProps = {
    icon: FaIcons.FaGlide,
    text: "tooltip 💡"
}

const Divider = () => <div className="sidebar-divider"/>;

export default Sidebar
