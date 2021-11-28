import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import "./editSendMessage.css";

const EditNameCard = () => {
   
    const person = useSelector(state => state.characters);
    const dispatch = useDispatch();

    return (
            <div className="info_input">
                <div className="input_new">
                    <input
                        value={person.name}
                        id="name"
                        type="text"
                        onChange={e => dispatch({type: 'CHANGE_NAME', payload: e.target.value})}/>
                    <label>Name</label>
                </div>
                <div className="input_new">
                    <input
                        value={person.occupation}
                        id="surname"
                        type="text"
                        onChange={e => dispatch({type: 'CHANGE_SURNAME', payload: e.target.value})}/>
                    <label>SurName</label>
                </div>
                <div className="input_new">
                    <input
                        value={person.age}
                        id="age"
                        type="number"
                        onChange={e => dispatch({type: 'CHANGE_AGE', payload: e.target.value})}/>
                    <label>Age</label>
                </div>
            </div>
      
    );
}

export default EditNameCard;