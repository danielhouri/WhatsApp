import React from 'react'
import Message from '../Message/Message';

function MessagesBody(props) {
    const messagesList = props.listChat.map((element, key) => {
        if (element.contenet != "") {
            return <Message side={element['side']} message_content={element['contenet']} key={key} message_time={element['time']} />
        }
    });
    return (
        <div className='messages_body overflow-auto'>
            {messagesList}
        </div>
    )
}

export default MessagesBody
