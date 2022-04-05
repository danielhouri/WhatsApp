import React from 'react'
import SideBarChat from './SideBarChat';
import logHistory from '../ChatLog';
import { getImageByUsername, getNicknameByUsername } from '../../Tools';

function SideBarChatResults({ chatList, setBackgroundShow }) {

    const getLastMessage = function (username) {
        var last_message = "";
        logHistory.forEach(element => {
            if (element.username == username) {
                last_message = element.data.at(-1)
            }
        })
        return last_message;
    };


    const getChatList = chatList.map((item, key) => {
        let message = getLastMessage(item.username);
        return <SideBarChat nickname={getNicknameByUsername(item.username)} username= {item.username} message_content={message.contenet} src={getImageByUsername(item.username)} message_time={message.time} key={key} setBackgroundShow={setBackgroundShow} />;
    });

    return (
        <div className='sidebar_chats overflow-auto'>
            {getChatList}
        </div>
    )
}

export default SideBarChatResults;