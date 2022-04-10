import React from 'react'
import Message from '../Message/Message';
import VoiceMessage from '../Message/VoiceMessage';
import ImageMessage from '../Message/ImageMessage';
import VideoMessage from '../Message/VideoMessage'; 

function MessagesBody(props) {
    const messagesList = props.listChat.map((element, key) => {
        if ((element.contenet != "") && (element['messagetype'] == "text")) {
            return <Message side={element['side']} message_content={element['contenet']} key={key} message_time={element['time']} />
        }
        else if(element['messagetype'] == "voice"){
            return <VoiceMessage side={element['side']} audioURL={element['contenet']} key={key} message_time={element['time']} />
        }
        else if(element['messagetype'] == "image"){
            return <ImageMessage side={element['side']} imageSrc={element['contenet']} key={key} message_time={element['time']} />
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
