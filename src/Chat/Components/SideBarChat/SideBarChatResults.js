import React from 'react'
import SideBarChat from './SideBarChat';
import logHistory from '../ChatLog';
import { getImageByUsername, getNicknameByUsername } from '../../Tools';

function SideBarChatResults({ chatList, setBackgroundShow }) {

    const getLastMessage = function (username) {
        var last_message = [];
        logHistory.forEach(element => {
            if (element.username == username) {
                last_message = [element.data.at(-1).contenet, element.data.at(-1).time];
                if (element.data.at(-1).messagetype == "voice") {
                    last_message[0]="Voice Message";
                }
                else if(element.data.at(-1).messagetype == "video") {
                    last_message[0]="Video Message";
                }
                else if(element.data.at(-1).messagetype == "image") {
                    last_message[0]="Image Message";
                }
            }
        })

        return last_message;
    };


    const getChatList = chatList.map((item, key) => {
        let message = getLastMessage(item.username);
        return <SideBarChat nickname={getNicknameByUsername(item.username)} username= {item.username} message_content={message[0]} src={getImageByUsername(item.username)} message_time={message[1]} key={key} setBackgroundShow={setBackgroundShow} />;
    });

    return (
        <div className='sidebar_chats overflow-auto'>
            {getChatList}
        </div>
    )
}

export default SideBarChatResults;