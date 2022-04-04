import React from 'react';
import './Chat.css';
import Messages from './Components/Messages';
import SideBar from './Components/SideBar';

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
