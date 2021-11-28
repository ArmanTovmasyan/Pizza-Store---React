import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import EditNameCard from "../../components/YourMessage/EditSendMessage";
import "./sendMessage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';


const SendMessage = () => {

    const person = useSelector(state => state.characters);
    
    const [isEdit, setEdit] = useState(false);

    const toggleEditBtn = () => {
        setEdit(!isEdit);
    }

    return (
        <section className="message_container">
            <h3 className="personal_info">Personal information</h3>
            
            <div className="info_container">
                    <p className="person_name">{person.name}</p>
                    <p className="person_name">{person.surName}</p>
                    <p className="person_name">Age: {person.age}</p>
                    <button
                        onClick={toggleEditBtn}
                        className="editBtn">
                        {isEdit
                            ? (
                                <div> <FontAwesomeIcon icon={faTrashAlt} />Clear</div>
                               
                            )
                            : (
                                <div> <FontAwesomeIcon icon={faEdit} />Edit</div>
                            )
                    }</button>
                </div>
            {isEdit && <EditNameCard/>}

        </section>
    );
}

export default SendMessage;