import React from 'react'

function SidebarOptions({title, Icon}) {
    return (
        <div className="sidebar_option">
            {Icon && <Icon className='sidebar_option_icons'/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
            
        </div>
    )
}

export default SidebarOptions
