import React from 'react'
import {useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import useDarkMode from '../hooks/useDarkMode'

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
        <Darkmode/>
        <SearchBar/>

        <div onClick={handleIconChange}>
            {icon? <AiIcons.AiFillBell size={25} className="dark:text-gray-500 text-gray-600 cursor-pointer"/>:<AiIcons.AiOutlineBell size={25} className="dark:text-gray-500 text-gray-600 cursor-pointer"/>}
        </div>
        <FaIcons.FaUserCircle size={25} className="dark:text-gray-500 text-gray-600 cursor-pointer"/>
       
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
