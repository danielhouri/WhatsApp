import React, { useState } from 'react';
import './Chat.css';
import Messages from './Components/Messages/Messages';
import SideBar from './Components/SideBar/SideBar';
import Background from './Components/Background/Background';

function Chat(props) {
    const [backgroundShow, setBackgroundShow] = useState(false);
    return (
        <div className='chat_main'>
            <div className="chat_body">
                <SideBar loginDetails={props.loginDetails} setBackgroundShow={setBackgroundShow} />
                {backgroundShow ? <Messages username={backgroundShow} /> : <Background />}
            </div>
        </div>
    );
}

export default Chat;
