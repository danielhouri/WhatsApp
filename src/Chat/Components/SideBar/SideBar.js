import React, { useRef, useState } from 'react'
import { Avatar } from '@mui/material'
import './SideBar.css'
import { Button } from 'react-bootstrap';
import SideBarChat from '../SideBarChat/SideBarChat';
import logHistory from '../ChatLog';

function SideBar(props) {
    
    const chatList = logHistory.map((item, key) => {
        return <SideBarChat name={item.username} message_content={item.last_message} src={item.src} message_time={item.last_time} key={key}/>;
    });


    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar src={props.src} />
                <Button variant="outline-secondary">
                    <i className="bi bi-chat-right-dots"></i>
                </Button>
            </div>
            <div className='sidebar_search'>
                <div className='sidebar_search_container'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input placeholder='Search or start a new chat'/>
                </div>
            </div>
            <div className='sidebar_chats overflow-auto'>
                {chatList }
            </div>
        </div>
    )
}

export default SideBar