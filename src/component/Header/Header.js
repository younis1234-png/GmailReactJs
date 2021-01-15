import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar, IconButton} from "@material-ui/core"
import { logout, selectUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from "../../firebase"

function Header ()
{
    const user = useSelector( selectUser )
    const dispatch = useDispatch();
    
    // signOut
    const singOut = () =>
    {
        // signOut out of firebase and out of google
        auth.signOut().then( () =>
        {
            dispatch(logout())
        })
        
    }

    return (
        <div className="header">
            {/* left header */ }
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt=""/>
            </div>
            {/* middle header */ }
            <div className="header__center">
                <SearchIcon />
                <input type="text" placeholder="Search mail..." />
                <ArrowDownwardIcon />
            </div>
            {/* right header */ }
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                   <NotificationsIcon /> 
                </IconButton>
                
                <Avatar className="header__avatar" onClick={singOut} src={user?.photoUrl} />
            </div>
            
        </div>
    ) 
}

export default Header
