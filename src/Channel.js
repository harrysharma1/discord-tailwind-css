import { useState } from 'react';
import * as BootstrapIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';

const ChannelBar = () => {
    <div >

    </div>
}

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
            <ChannelBarBodyDropdown title="Topics" subcategories={["tailwind-css","react"]} />
            <ChannelBarBodyDropdown title="Questions" subcategories={["jit-compilation","purge-files","dark-mode"]}/>
            <ChannelBarBodyDropdown title="Random" subcategories={["variants","plugins"]}/>
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
                    <FaIcons.FaPlus />
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
                # {subcategory}
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
  const [expanded, setExpanded] = useState(false);
  return (

      <div className="channel-bar">
            <ChannelBarHead/>
            <ChannelBarBody/>
      </div>
  
  )
}

export default Channel
