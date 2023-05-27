import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as BootstrapIcons from 'react-icons/bs'
function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SidebarIcon icon={<FaIcons.FaFire size={28}/>}/>
        <Divider/>
        <SidebarIcon icon={<BootstrapIcons.BsPlus size={32}/>}/>
        <SidebarIcon icon={<BootstrapIcons.BsFillLightningFill size={20}/>}/>
        <SidebarIcon icon={<FaIcons.FaOilCan size={20}/>}/>
        <Divider/>
        <SidebarIcon icon={<BootstrapIcons.BsGearFill size={20}/>}/>
      
    </div>
  )
}

const SidebarIcon = ({icon,text='test 💡'}) => (
    <div className="sidebar-icons group">
        {icon}  
    <span className="sidebar-tooltip group-hover:scale-100">
        {text}
    </span>
    </div>
);

const Divider = () => <div className="sidebar-divider"/>;

export default Sidebar
