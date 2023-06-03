import React from 'react'
import {useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import useDarkMode from '../hooks/useDarkMode'
import {motion} from 'framer-motion'
import { Drawer } from '@mui/material'



function NavBar() {
    const [icon,setIcon] = useState(false);
  
    const handleIconChange = () => {
            setIcon(!icon);
    }

  
  return (
    <div className="nav-bar">
        <div className='title-text'>
            <FaIcons.FaDiscord size={25}/>
            <Title/>
        </div>
        <motion.div whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
              <Darkmode/>
        </motion.div>
        <SearchBar/>

        <div onClick={handleIconChange}>
            <motion.div whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                     {icon? <AiIcons.AiFillBell size={25} className="dark:text-gray-500 text-gray-600 cursor-pointer"/>:<AiIcons.AiOutlineBell size={25} className="dark:text-gray-500 text-gray-600 cursor-pointer"/>}  
            </motion.div>
        </div>

        <motion.div whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
             <HiIcons.HiUsers size={25} className="dark:text-gray-500 text-gray-600 cursor-pointer"/>
        </motion.div>

  
    </div>
  )
}
const SearchBar = ()=> {
    return(
        <div className='search'>
        <input className='search-input' type='text' placeholder='Search...' />
        <FaIcons.FaSearch size='18' className='text-secondary my-auto cursor-pointer' />
      </div>
    )

}

const Darkmode = ()=> {
    const [darkMode, setDarkMode] = useDarkMode();
   
    const handleIconChange = () => {
       setDarkMode(!darkMode);
    }
    return(
        <div className="dark-mode" onClick={handleIconChange}>
            {darkMode ? <BsIcons.BsMoonFill size={25} className="darkmode-icon"/>:<BsIcons.BsSunFill size={25} className="darkmode-icon"/>}
        </div>
    )
}


const Title = ()=> <h5>tailwind-css</h5>


export default NavBar
