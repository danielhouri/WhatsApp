import React from 'react'
import Message from '../Message/Message';
import MessageVoice from '../Message/MessageVoice';

function MessagesBody(props) {
    const messagesList = props.listChat.map((element, key) => {
        if ((element.contenet != "") && (element['messagetype'] == "text")) {
            return <Message side={element['side']} message_content={element['contenet']} key={key} message_time={element['time']} />
        }
        else if(element['messagetype'] == "voice"){
            return <MessageVoice side={element['side']} audioURL={element['contenet']} key={key} message_time={element['time']} />
        }
    });
    return (
        <div className='messages_body overflow-auto'>
            {messagesList}
        </div>
    )
}

export default MessagesBody
