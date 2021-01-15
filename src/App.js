import React, { useEffect } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Sidebar from "./component/body/sidebar/Sidebar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from './component/body/mail/Mail';
import EmailList from './component/body/emailList/EmailList';
import SendMail from "./component/body/sendmail/SendMail"
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, logout, selectUser } from './features/userSlice';
import Login from './component/login/Login';
import { auth } from './firebase';


function App ()
{
  // get the data of s
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  const user = useSelector( selectUser )
  const dispatch = useDispatch()

  useEffect( () =>
  {
    auth.onAuthStateChanged( user =>
    {
      if ( user )
      {
        // user is logged in
        dispatch( login( {
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
        }))
      } else
      {
        dispatch(logout())
      }
    })
  },[])

  return (
    <Router> 
      {!user ? ( <Login /> )
        : (
          
           <div className="app">
        
        
            {/* header  */ }
            <Header />
        


            {/* body  */ }
            <div className="app__body">
          <Sidebar />
          
          <Switch>
                <Route path="/mail">
                  <Mail />
                 </Route>
            
                <Route path="/">
                  <EmailList />
                </Route>
          </Switch>
          
        </div>
        
        {/* is the send message is open render the SendMail, (BECAUSE BE DEFAULT THE SEND MESSAGE IS OPEN IS SET TO FALSE) */}
        {sendMessageIsOpen && <SendMail /> }
        </div>
      )}
       
    </Router>
  );
}

export default App;

// react router https://reactrouter.com/web/guides/quick-start