import React, { useState, useEffect } from 'react';
import './Chat.css';
import Messages from './Components/Messages';
import SideBar from './Components/SideBar';

function Chat() {
    return (
        <div className='chat_main'>
            <div className="chat_body container">
                <SideBar />
                <Messages />
            </div>
        </div>
    );
}

export default Chat;
