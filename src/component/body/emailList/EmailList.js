import React, { useState, useEffect } from 'react'
import "./EmailList.css"
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { IconButton } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import GroupIcon from '@material-ui/icons/Group';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './section/Section';
import EmailRow from './emailRow/EmailRow';
import db from "../../../firebase"

function EmailList ()
{
    const [ emails, setEmails ] = useState([])
    

    // Map it 
    useEffect( () =>
    {
        db.collection('emails')
            .orderBy( "timestamp", "desc" )
            .onSnapshot( ( snapshot ) =>
                setEmails(
                    snapshot.docs.map( ( doc ) => ( {
                        id: doc.id,
                        data: doc.data(),
            }))
        ))
        
   }, [])


    return (
        <div className="emailList">
            
            
            <div className="emailList_settings">
                {/* Setting Left */}
                <div className="emailList_settingsLeft">
                    <CheckBoxOutlineBlankIcon />
                    <IconButton>
                        <ArrowDownwardIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                {/* Setting Right */}
                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            {/* sections*/ }
             <div className="emailList_section">
                    <Section Icon={ InboxIcon } color="red" title="Primary" selected={ true }/>
                    <Section Icon={ GroupIcon } color="#1a7338" title="Social" />
                    <Section Icon={ LocalOfferIcon} color="green" title="Promotions"/>
            </div>
            
            <div className="emailList_list">
                
                { emails.map( ({id, data: {to, subject, message, timestamp}}) => (
                    <EmailRow 
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ) ) }
                 <EmailRow 
                        title="Twitch"
                        subject="Hey is Younis"
                        description="this is a test"
                        time="10px"
                />
                 <EmailRow 
                        title="Twitch"
                        subject="Hey is Younis"
                        description="this is a test"
                        time="10px"
                    />
                 <EmailRow 
                        title="Twitch"
                        subject="Hey is Younis"
                        description="this is a test"
                        time="10px"
                />
                 <EmailRow 
                        title="Twitch"
                        subject="Hey is Younis"
                        description="this is a test"
                        time="10px"
                    />
                 <EmailRow 
                        title="Twitch"
                        subject="Hey is Younis"
                        description="this is a test"
                        time="10px"
                />
                 <EmailRow 
                        title="You"
                        subject="Hey is Younis"
                        description="this is a test"
                        time="10px"
                    />
            
            </div>
        </div>
    )
}

export default EmailList
