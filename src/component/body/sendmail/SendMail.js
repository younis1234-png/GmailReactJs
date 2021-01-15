import React from 'react'
import "./SendMail.css"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from '@material-ui/core'
import{useForm} from "react-hook-form"
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../../../features/mailSlice'
import db  from "../../../firebase"
import firebase from "firebase"

function Sendmail ()
{
    // our react-hook-form, each input has to have a name
    const { register, handleSubmit, watch, errors } = useForm()
    const dispatch = useDispatch();
    
    // onSubmit function
    const onSubmit = ( formData ) =>
    {
        console.log( formData )
        db.collection( 'emails' ).add(
            {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
        
        // once we send the message we want to close the message 
        dispatch( closeSendMessage() )
    }

    


    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New message</h3>
                <CloseIcon
                    className="sendMail__close"
                    onClick={() => dispatch(closeSendMessage())}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} >
                <input
                    name="to"
                    placeholder="To"
                    type="email"
                    ref={register({ required: true})}
                />
                { errors.to && <p className="sendMail__error">To is Required</p> } 
                
                <input
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    ref={register({ required: true})}
                />
                { errors.subject && <p className="sendMail__subject">Subject is Required</p> } 

                <input
                    name="message"
                    placeholder="Message...."
                    type="text"
                    className="sendMail__message"
                    ref={register({ required: true})}
                />
               { errors.message && <p className="sendMail__messageInput">Message is Required</p> } 

                

                <div className="sendMail__options">
                    <Button
                        className="sendMail__button"
                        variant="contained"
                        color="primary"
                        type="submit"
                        
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default Sendmail


// npm add react-hook-form