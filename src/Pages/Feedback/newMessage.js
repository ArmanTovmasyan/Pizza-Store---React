import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditNewMessage from '../../components/YourMessage/editNewMessage';
import "./newMessage.css";


const NewMessage = () => {


  const message = useSelector(state => state.message.feedbackMessage);

  const dispatch = useDispatch();

  const [inputMessage,setinputMessage] =  useState('');

  const [errMsg,setErrMsg] = useState('');

  const handleInput = (e)=>{
    setinputMessage(e.target.value);
  }

  const addNewMessage = ()=>{

    if(inputMessage.trim().length>1)
    {   
        setErrMsg('');
        let newMessage={
            id: Math.random(),
            content:inputMessage
        }
        
        dispatch({type:'ADD_MESSAGE',payload:newMessage});
     
        setinputMessage('');
    }
    else{
        
        setErrMsg('Please input something...');
    }

   
  }

    return (    
        <section className="section-new_message">
        <h3 className="">Your message</h3>
        {
            message.length>0?
            (<div className="yourFeedback">
            {
              message.map(item => {
                return <EditNewMessage key={item.id} item={item} />
              })
            }
          </div>):
          (<p className="">You don't have any message</p>)
        }
       
        <div className="">
        <p className="">
        {errMsg}
        </p>
        <div className="new_message_div">
            <input size="80" onChange={handleInput} value={inputMessage} placeholder="Add message..." id="message-input" type="text" />
            <label  className="active_message">New message</label>
        </div>
      
        <button className="" onClick={addNewMessage} >Send</button>
        </div>
      </section>
      );
}
 
export default NewMessage;