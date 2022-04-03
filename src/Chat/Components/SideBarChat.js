import { Avatar } from '@mui/material'
import React from 'react'
import './SideBarChat.css'

function SideBarChat(props) {
    return (
        <div className='sidebarchat container'>
            <div className='row'>
                <div className='col col-2'>
                    <Avatar src='https://avatars.dicebear.com/api/bottts/:seed.svg' />
                </div>
                <div className='col col-8'>
                    <div className='sidebarchat_info'>
                        <h2>{props.name}</h2>
                        <p>{props.lastmessage}</p>
                    </div>
                </div>
                <div className='col col-2'>
                    <div className="sidebarchat_time"> 19:42 </div>
                </div>

            </div>
        </div>
    )
}

export default SideBarChat