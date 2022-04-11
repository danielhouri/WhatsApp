import React, { useRef, useState } from 'react';
import "./Messages.css";
import { getImageByUsername, getNicknameByUsername, getMessageByUsername, addNewMessage } from '../../Tools';
import "../ChatLog";
import MessagesBody from './MessagesBody';
import VoicePopUp from '../VoiceRecorder/VoicePopUp';
import ImagePopUp from './ImagePopUp';
import VideoPopUp from './VideoPopUp';

function Messages(props) {
  const [voiceMessage, setVoiceMessage] = useState(false);
  const chatBox = useRef(null);
  const handleSendMessage = () => {
    const d = new Date();
    let time = d.getHours() + ":" + d.getMinutes();
    addNewMessage(props.username, 'text', true, time, chatBox.current.value);
    chatBox.current.value = '';
    props.setRefresh(props.refresh + 1);
  };
  const handleEnterMessage = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage()
    }
  }

  const handleOpenVoice = () => {
    setVoiceMessage(true)
  }

  const handleCloseVoice = () => {
    setVoiceMessage(false)
  }


  return (
    <div className="messages">
      <div className='messages_header'>
        <img className='avatar1' src={getImageByUsername(props.username)} />
        <div className='messages_header_info'>
          <h3>{getNicknameByUsername(props.username)}</h3>
        </div>
      </div>
      <MessagesBody listChat={getMessageByUsername(props.username)} />
      <div className='messages_footer'>
        <i className="bi bi-mic-fill" onClick={handleOpenVoice}> </i>
        <div className="dropdown messages_footer">
          <i className="bi bi-paperclip" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <i className="bi bi-image dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            <i className="bi bi-camera-reels dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal1"></i>
          </ul>
        </div>
        <form>
          <input ref={chatBox} placeholder='Type a Message' onKeyPress={handleEnterMessage} />
        </form>
        <i onClick={handleSendMessage} type="submit" className="bi bi-send-fill"> </i>
      </div>
      <VoicePopUp show={voiceMessage} handleClose={handleCloseVoice} username={props.username} refresh={props.refresh} setRefresh={props.setRefresh} />
      <ImagePopUp username={props.username} refresh={props.refresh} setRefresh={props.setRefresh} />
      <VideoPopUp username={props.username} refresh={props.refresh} setRefresh={props.setRefresh} />
    </div>
  )
}

export default Messages;