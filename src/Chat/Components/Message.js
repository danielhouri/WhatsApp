import React from 'react'
import './Message.css'

function Message(props) {
    return (
        <p className={props.side ? 'messages_body_message message_receiver': 'messages_body_message'}>
            Hi guys
            <span className="sidebarchat_time noselect"> 19:42 </span>
        </p>
    )
}

export default Message