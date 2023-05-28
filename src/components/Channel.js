import { useState } from 'react';
import * as BootstrapIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';



const ChannelBarHead = () => {
    return(
        <div className="channel-bar-title">
            <h5>Channels</h5>
         </div>
    )
}

const ChannelBarBody = () => {
    return(
        <div>
            <ChannelBarBodyDropdown title="Languages" subcategories={["java","python","scala","javascript",]} />
            <ChannelBarBodyDropdown title="Frameworks" subcategories={["Django","React"]}/>
            <ChannelBarBodyDropdown title="Favourites" subcategories={["Machine Learning","Web-development","Data engineering"]}/>
        </div>
    )
}

const ChannelBarBodyDropdown = ({title,subcategories}) => {
    const [expanded, setExpanded] = useState(false);
    const handleClick = ()=>{
        setExpanded(!expanded);
    }
        return(
            <div className="channel-bar-body-dropdown">
                <div onClick={handleClick}className="channel-bar-body-dropdown-header">
                    <Chevron expanded={expanded}/>
                    <h5 className={expanded ?'channel-bar-body-dropdown-selected':'channel-bar-body-dropdown-text'}>
                         {title}
                    </h5>
                    <FaIcons.FaPlus className="flex-shrink-0"/>
                </div>
                {expanded && 
                    subcategories&&
                    subcategories.map((subcategory)=><ChannelBarBodyDropdownItem subcategory={subcategory}/>)
                }
            </div>
        )
}
const ChannelBarBodyDropdownItem = ({subcategory}) => {
        return(
            <div className="channel-bar-body-dropdown-items">
                <BootstrapIcons.BsHash size={25} className="dark:text-white text-gray-700 flex-shrink-0"/>  
                <div className="justify-items-center dark:text-gray-600 text-gray-500">
                    {subcategory}
                </div>
                
            </div>
        )
}
const Chevron = ({expanded}) => {
    const chevClass="chevron-icon"
    return expanded ? (
        <FaIcons.FaChevronDown className={chevClass}/>
    ):(
        <FaIcons.FaChevronRight className={chevClass}/>
    );
}
function Channel() {
  return (

      <div className="channel-bar">
            <ChannelBarHead/>
            <ChannelBarBody/>
      </div>
  
  )
}

export default Channel
