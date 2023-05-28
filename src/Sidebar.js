import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as BootstrapIcons from 'react-icons/bs'
function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col dark:bg-gray-900 bg-white text-white shadow-lg">
        <SidebarIcon icon={<FaIcons.FaGithub size={28} onClick={event=>window.location.href="https://github.com/harrysharma1"} text="Test"/>}/>
        <Divider/>
        <SidebarIcon icon={<FaIcons.FaLinkedin size={32} onClick={event=>window.location.href="https://www.linkedin.com/in/harry-sharma-567b21225/"}/>}/>
        <SidebarIcon icon={<BootstrapIcons.BsFillLightningFill size={20}/>}/>
        <SidebarIcon icon={<FaIcons.FaOilCan size={20}/>}/>
        <Divider/>
        <SidebarIcon icon={<BootstrapIcons.BsGearFill size={20}/>}/>
      
    </div>
  )
}

const SidebarIcon = ({icon,text}) => (
    <div className="sidebar-icons group">
        {icon}  
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
