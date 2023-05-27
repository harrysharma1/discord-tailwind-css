import React from 'react'
import * as FaIcons from 'react-icons/fa'
function NavBar() {
  return (
    <div className="nav-bar">
        <div className='title-text'>
            <FaIcons.FaDiscord size={25}/>
            <Title/>
        </div>
   
        <SearchBar/>
    </div>
  )
}
const SearchBar = ()=> {
    return(
        <div className='search'>
        <input className='search-input' type='text' placeholder='Search...' />
        <FaIcons.FaSearch size='18' className='text-secondary my-auto' />
      </div>
    )

}
const Title = ()=> <h5>tailwind-css</h5>

export default NavBar
