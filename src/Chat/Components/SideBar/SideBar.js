import React, {  useState } from 'react'
import './SideBar.css'
import { Button } from 'react-bootstrap';
import logHistory from '../ChatLog';
import SideBarChatResults from '../SideBarChat/SideBarChatResults';
import Search from '../SideBarChat/Search';
import { getNicknameByUsername } from '../../Tools';
import NewChat from './NewChat';
import userDefualt from '../../../avatar/user.png';

function SideBar(props) {
    const [searchQuery, setSearchQuery] = useState(logHistory[props.loginDetails.username]);
    const [newChat, setNewChat] = useState(false);

    const doSearch = function (q) {
        setSearchQuery(logHistory[props.loginDetails.username].filter((index) => getNicknameByUsername(index.username).toLowerCase().includes(q.toLowerCase())));
    }
    const handleOnShow = () => {
        setNewChat(true);
    };
    const handleOnClose = () => {
        setNewChat(false);
    };

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
            {props.loginDetails['src'] ? <img className='avatar' src={props.loginDetails['src']} /> : <img className='avatar' src={userDefualt}/> }
                <h4 className='avatar2'>Hi {props.loginDetails.username ? props.loginDetails.username : ''}</h4>
                <Button variant="outline-secondary" onClick={handleOnShow}>
                    <i className="bi bi-chat-right-dots"></i>
                </Button>
            </div>
            <Search doSearch={doSearch} />
            <SideBarChatResults ownerUsername={props.loginDetails.username} chatList={searchQuery} setBackgroundShow={props.setBackgroundShow} />
            <NewChat username={props.loginDetails.username} show={newChat} handleClose={handleOnClose} page={"New Chat"} setSearchQuery={setSearchQuery}/>
        </div>
    )
}

export default SideBar;