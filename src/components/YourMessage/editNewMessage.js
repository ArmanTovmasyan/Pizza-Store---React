import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import "./editNewMessage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const EditNewMessage = (props) => {
    
    const Message = useSelector(state => state.message.feedbackMessage)
    const dispatch = useDispatch();

    const removeMessage = (MessageId) => {
        let newMessage = Message.filter(item => item.id !== MessageId);
        dispatch({type: 'REMOVE_MESSAGE', payload: newMessage})

    }

    return (
        <div className="messageStyle" key={props.item.id}>{props.item.content}
        
            <span onClick={() => {removeMessage(props.item.id)}}>
               <div className="Remove_message"> <FontAwesomeIcon className ="icon_x" icon={faTimes} /></div>
            </span>
        </div>
    );
}

export default EditNewMessage;