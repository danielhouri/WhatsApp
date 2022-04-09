import { Avatar } from '@mui/material';
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
  const [imageWindow, setImageWindow] = useState(true);
  const [videoWindow, setVideoWindow] = useState(true);
  const chatBox = useRef(null);
  const [toolBar, setToolBar] = useState(true)
  const handleSendMessage = () => {
    const d = new Date();
    let time = d.getHours() + ":" + d.getMinutes();
    addNewMessage(props.username, 'text', true, time, chatBox.current.value);
    chatBox.current.value = '';
    props.setRefresh(props.refresh + 1);
  };
  const handleToolBar = () => {
    setToolBar(!toolBar)
  }
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
  const handleCloseChoosImage = () => {
    setImageWindow(false)
  }
  const handleCloseChoosVideo = () => {
    setVideoWindow(false)
  }


  return (
    <div className="messages">
      <div className='messages_header'>
        <Avatar src={getImageByUsername(props.username)} />
        <div className='messages_header_info'>
          <h3>{getNicknameByUsername(props.username)}</h3>
        </div>
      </div>
      <MessagesBody listChat={getMessageByUsername(props.username)}/>
      
      <div hidden={toolBar} className='toolbar'>
          <i className="bi bi-image" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
          <i className="bi bi-camera-reels" data-bs-toggle="modal" data-bs-target="#staticBackdrop1"></i>
          <i className="bi bi-geo-alt"></i> 
      </div>
      <div className='messages_footer'>
        <i className="bi bi-mic-fill" onClick={handleOpenVoice}> </i>
        <i className="bi bi-paperclip" onClick={handleToolBar}></i>
        <form>
          <input ref={chatBox} placeholder='Type a Message' onKeyPress={handleEnterMessage} />
        </form>
        <i onClick={handleSendMessage} type="submit" className="bi bi-send-fill"> </i>
      </div>
      <VoicePopUp show={voiceMessage} handleClose={handleCloseVoice} username={props.username} refresh={props.refresh} setRefresh={props.setRefresh} />
      <ImagePopUp />
      <VideoPopUp username={props.username}/>
    </div>
  )
}

export default Messages;