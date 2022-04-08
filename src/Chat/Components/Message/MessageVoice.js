import React from 'react'

function MessageVoice(props) {
    return (

        <p className={props.side ? 'messages_body_message message_receiver' : 'messages_body_message'}>
            <audio src={props.audioURL} controls />
            <span className="sidebarchat_time noselect"> {props.message_time} </span>
        </p>
    )
}

export default MessageVoice
