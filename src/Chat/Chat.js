import React, { useState } from 'react';
import './Chat.css';
import Messages from './Components/Messages/Messages';
import SideBar from './Components/SideBar/SideBar';
import Background from './Components/Background/Background';


function Chat(props) {
    const [backgroundShow, setBackgroundShow] = useState(false);
    const [refresh, setRefresh] = useState(0);
    return (
        <div className='chat_main'>
            <div className="chat_body">
                <SideBar loginDetails={props.loginDetails} setBackgroundShow={setBackgroundShow} />
                {backgroundShow ? <Messages username={backgroundShow} refresh={refresh} setRefresh={setRefresh}/> : <Background />}
            </div>
        </div>
    );
}

export default Chat;
