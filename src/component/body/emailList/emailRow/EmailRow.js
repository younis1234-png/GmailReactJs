import React from 'react'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelIcon from '@material-ui/icons/Label';
import { IconButton } from '@material-ui/core';
import "./EmailRow.css"
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {selectMail} from "../../../../features/mailSlice"

function EmailRow ( { id, title, description, time, subject } )
{
    // we use this to go to a next page
    const history = useHistory()

    const dispatch = useDispatch()

    const openMail = () =>
    {
        dispatch( selectMail( {
            id, title, description, time, subject
        } ) )   
        
        // take us to the mail page
        history.push("/mail")
    }

    return (
        <div onClick={openMail} className="emailRow">
            {/* option */}
            <div className="emailRow_option">
                <CheckBoxOutlineBlankIcon />
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>
                <IconButton>
                    <LabelIcon/>
                </IconButton>
            </div>
            {/* title */}
            <h3 className="emailRow_title">
                {title}
            </h3>
            {/* message */}
            <div className="emailRow_message">
                <h4>{ subject }{" "}
                    <span className="emailRow_description">
                        {description}
                    </span>
                </h4>
            </div>
            {/* description */}
            <p className="emailRow_time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
