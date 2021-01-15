import { Button, IconButton } from '@material-ui/core'
import AddIcon from "@material-ui/icons/Add"
import React from 'react'
import "./Sidebar.css"
import SidebarOptions from "./sidebarOption/SidebarOptions"
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NoteIcon from '@material-ui/icons/Note';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../../../features/mailSlice'

function Sidebar ()
{
    //  WE USE dispatch ==> shot us an action
    const dispatch = useDispatch()
    // import openSendMessage

    return (
        <div className="sidebar">
            {/* opensendmessage which change the state to true, we gonna get that state with dispatch */}
            <Button
                startIcon={ <AddIcon fontSize="large" /> }
                className="sidebar__compose"
                onClick={() => dispatch(openSendMessage()) }
            >Compose</Button>
            
            {/* create a reusiable componenet */ }
            <SidebarOptions selected={ true} Icon={InboxIcon} title="Inbox" number={54} />
            <SidebarOptions Icon={StarIcon} title="Starred" number={54} />
            <SidebarOptions Icon={AccessTimeIcon} title="Snoozed" number={54} />
            <SidebarOptions Icon={LabelImportantIcon} title="Important" number={54} />
            <SidebarOptions Icon={NearMeIcon} title="Sent" number={54} />
            <SidebarOptions Icon={NoteIcon} title="Drafts" number={54} />
            <SidebarOptions Icon={ ExpandMoreIcon } title="More" number={ 54 } />
            
            <div className="sidebar__footer">
                <div className="sidebar__footerIcon">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
