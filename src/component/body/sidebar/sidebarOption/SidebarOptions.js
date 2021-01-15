import React from 'react'
import "./SidebarOptions.css"

function SidebarOptions ( { Icon, title, number, selected } )
{
    
    return (
        <div className={`sidebarOptions ${selected && "sidebar__active"}` }>
            <Icon/>
            <h3>{ title }</h3>
            <p>{number }</p>
        </div>
    )
}

export default SidebarOptions
