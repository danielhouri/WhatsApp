import { Avatar } from '@mui/material';
import React, { useRef, useState } from 'react';
import "./Messages.css";
import { getImageByUsername, getNicknameByUsername, getMessageByUsername, addNewMessage} from '../../Tools';
import "../ChatLog";
import MessagesBody from './MessagesBody';

function Messages(props) {
  const chatBox = useRef(null);
  const handleSendMessage = () => {
    const d = new Date();
    let time = d.getHours() + ":" + d.getMinutes();
    addNewMessage(props.username, 'text', true, time, chatBox.current.value);
    chatBox.current.value='';
    props.setRefresh(props.refresh + 1);
  };
  const handleEnterMessage = (e)=> {
    if(e.key==='Enter'){
      e.preventDefault();
      handleSendMessage()
    }
  }

  return (
    <div className="messages">
      <div className='messages_header'>
        <Avatar src={getImageByUsername(props.username)} />
        <div className='messages_header_info'>
          <h3>{getNicknameByUsername(props.username)}</h3>
        </div>
      </div>
      <MessagesBody listChat={getMessageByUsername(props.username)} />
      <div className='messages_footer'>
        <i className="bi bi-mic-fill"></i>
        <i className="bi bi-paperclip"></i>
        <form>
          <input ref={chatBox} id='chattextbox' placeholder='Type a Message' onKeyPress={handleEnterMessage} />
        </form>
        <i onClick={handleSendMessage} type="submit" className="bi bi-send-fill"> </i>
      </div>
    </div>
  )
}

export default Messages;