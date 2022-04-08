import { Avatar } from '@mui/material';
import React, { useRef, useState } from 'react';
import "./Messages.css";
import { getImageByUsername, getNicknameByUsername, getMessageByUsername, addNewMessage } from '../../Tools';
import "../ChatLog";
import MessagesBody from './MessagesBody';
import VoicePopUp from './VoicePopUp';
function Messages(props) {
  const [showToolBar, setShowToolBar] = useState(false)
  const [voiceMessage, setVoiceMessage] = useState(false)
  const handleToolBar = () => setShowToolBar(!showToolBar);
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
  const toolBar = () => {
    return (
      <span id='toolbar'>
        <i className="bi bi-image"></i>
        <i className="bi bi-camera-reels"></i>
        <i className="bi bi-geo-alt"></i>
      </span>)

  }
  const handleOpenVoice = () => {
    setVoiceMessage(true)
  }
  const handleColseVoice = () => {
    setVoiceMessage(false)
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
      
      {showToolBar ? toolBar() : null}
      <div className='messages_footer'>
        <i className="bi bi-mic-fill" onClick={handleOpenVoice}> </i>
        <i className="bi bi-paperclip" onClick={handleToolBar}></i>
        <form>
          <input ref={chatBox} placeholder='Type a Message' onKeyPress={handleEnterMessage} />
        </form>
        <i onClick={handleSendMessage} type="submit" className="bi bi-send-fill"> </i>
        <VoicePopUp show={voiceMessage} handleClose={handleVoiceMessage} page={''}/>
      </div>
      <VoicePopUp show={voiceMessage} handleClose={handleColseVoice} />
    </div>
  )
}

export default Messages;