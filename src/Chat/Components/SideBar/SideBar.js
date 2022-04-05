import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import './SideBar.css'
import { Button } from 'react-bootstrap';
import logHistory from '../ChatLog';
import SideBarChatResults from '../SideBarChat/SideBarChatResults';
import Search from '../SideBarChat/Search';
import { getNicknameByUsername } from '../../Tools';

function SideBar(props) {
    const [searchQuery, setSearchQuery] = useState(logHistory);

    const doSearch = function (q) {
        setSearchQuery(logHistory.filter((index) => getNicknameByUsername(index.username).toLowerCase().includes(q.toLowerCase())));
    }

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar src={props.loginDetails['src']} />
                <Button variant="outline-secondary">
                    <i className="bi bi-chat-right-dots"></i>
                </Button>
            </div>
            <Search doSearch={doSearch} />
            <SideBarChatResults chatList={searchQuery} setBackgroundShow={props.setBackgroundShow} />
        </div>
    )
}

export default SideBar;