import React from 'react';
import "./contacts.css";
import SendMessage from '../Feedback/sendMessage';
import NewMessage from "../Feedback/newMessage";

function Contacts(props) {
   
    return (
        <div className ="contacts">
            <SendMessage />
            <NewMessage />
        </div>
    );
}

export default Contacts;