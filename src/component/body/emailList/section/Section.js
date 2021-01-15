import React from 'react'
import "./Section.css"

function Section({Icon, title, color, selected}) {
    return (
        <div className={ `section ${ selected && "section_selected" }` }
            style={ {
                borderBottom:`3px solid${ color }`,
                color: `${selected && color}`
                }}
                >
            
            <Icon />
            <h3>{ title}</h3>
        </div>
    )
}

export default Section
