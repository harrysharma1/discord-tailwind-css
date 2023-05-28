import React from 'react'
import {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
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
        <SearchBar/>

        <div onClick={handleIconChange}>
            {icon? <AiIcons.AiFillBell size={25} className="text-gray-500 cursor-pointer"/>:<AiIcons.AiOutlineBell size={25} className="text-gray-500 cursor-pointer"/>}
        </div>
        <FaIcons.FaUserCircle size={25} className="text-gray-500 cursor-pointer"/>
       
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
const Title = ()=> <h5>tailwind-css</h5>

export default NavBar
