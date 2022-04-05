import { Avatar } from '@mui/material'
import React from 'react'
import Message from '../Message/Message'
import "./Messages.css"
import { getImageByUsername, getNicknameByUsername } from '../../Tools';

function Messages(props) {
  return (
    <div className="messages">
      <div className='messages_header'>
        <Avatar src={getImageByUsername(props.username)} />
        <div className='messages_header_info'>
          <h3>{getNicknameByUsername(props.username)}</h3>
        </div>
      </div>
      <div className='messages_body overflow-auto'>
        <Message side={true} message_content="Hey guy" message_time="17:52" />
        <Message message_content="Hey guy" message_time="20:52" />
      </div>

      <div className='messages_footer'>
        <i className="bi bi-mic-fill"></i>
        <i className="bi bi-paperclip"></i>
        <form>
          <input placeholder='Type a Message' />
        </form>
        <i type="submit" className="bi bi-send-fill"></i>
      </div>
    </div>
  )
}

export default Messages;