import React from 'react';
import './Chat.css';
import Messages from './Components/Messages/Messages';
import SideBar from './Components/SideBar/SideBar';
import Background from './Components/Background/Background';
function Chat(props) {
    return (
        <div className='chat_main'>
            <div className="chat_body">
                <SideBar src={props.loginDetails['src']} />
                <Messages />
            </div>
        </div>
    );
}

export default Chat;
