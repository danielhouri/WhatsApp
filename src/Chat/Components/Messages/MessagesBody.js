import React from 'react'
import Message from '../Message/Message';
import MessageVoice from '../Message/MessageVoice';
import ImageMassage from '../Message/ImageMassage';
import VideoMessage from '../Message/VideoMessage';

function MessagesBody(props) {
    const messagesList = props.listChat.map((element, key) => {
        if ((element.contenet != "") && (element['messagetype'] == "text")) {
            return <Message side={element['side']} message_content={element['contenet']} key={key} message_time={element['time']} />
        }
        else if(element['messagetype'] == "voice"){
            return <MessageVoice side={element['side']} audioURL={element['contenet']} key={key} message_time={element['time']} />
        }
        else if(element['messagetype'] == "image"){
            return <ImageMassage side={element['side']} file={element['contenet']} key={key} message_time={element['time']} />
        }
        else if(element['messagetype'] == "video"){
            return <VideoMessage side={element['side']} videoSrc={element['contenet']} key={key} message_time={element['time']} />
        }
    });
    return (
        <div className='messages_body overflow-auto'>
            {messagesList}
        </div>
    )
}

export default MessagesBody
