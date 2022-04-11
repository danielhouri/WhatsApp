import React from 'react';
import './SideBarChat.css';
import userDefualt from '../../../avatar/user.png'


function SideBarChat(props) {
    const handleClicked = function () {
        props.setBackgroundShow(props.username);
    }
    return (
        <div className='sidebarchat container' onClick={handleClicked}>
            <div className='row'>
                <div className='col col-2 sidebarchat_avatar'>
                    {props.src ? <img id='aa' src={props.src} /> : <img id='aa' src={userDefualt} />}
                </div>
                <div className='col col-8'>
                    <div className='sidebarchat_info'>
                        <h2>{props.nickname}</h2>
                        <p>{props.message_content}</p>
                    </div>
                </div>
                <div className='col col-2'>
                    <div className="sidebarchat_time"> {props.message_time} </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarChat;