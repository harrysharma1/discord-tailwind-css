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
        <div className="channel-bar-body">
            <ChannelBarBodyDropdown title="Topics" subcategories={["tailwind-css","react"]} />
            <ChannelBarBodyDropdown title="Questions" subcategories={["jit-compilation","purge-files","dark-mode"]}/>
            <ChannelBarBodyDropdown title="Random" subcategories={["variants","plugins"]}/>
            <ChannelBarBodyDropdown/>  
        </div>
    )
}

const ChannelBarBodyDropdown = ({title,subcategories}) => {
    const [expanded, setExpanded] = useState(false);
        return(
            <div className="channel-bar-body-dropdown">
                <div onClick={()=>setExpanded(!expanded)}>
                    <Chevron expanded={expanded}/>
                    <h5 className={expanded ?'channel-bar-body-dropdown-selected':'channel-bar-body-dropdown-text'}>{title}</h5>
                </div>
            </div>
        )
}

const Chevron = ({expanded}) => {
    const chevClass=''
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
