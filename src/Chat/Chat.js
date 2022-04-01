import React, { useState, useEffect } from 'react';
import './Chat.css';


function Chat() {
    return (
        <div className="container app">
            <div className="row app-one">
                <div className="col-sm-4 side">
                    <div className="side-one">
                        <div className="header--profil">
                            <div className="heading-avatar-icon">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png"></img>
                            </div>
                            <div className="header--buttons">
                                <div className="header--btn">
                                    <i className="bi bi-chat-right-dots"></i>
                                </div>
                            </div>
                        </div>
                        <div className="search">
                            <div className="search--input" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                                <input type="search" placeholder="Search or start a chat" />
                            </div>
                        </div>


                        <div className="row sideBar">
                            <div className="chatListItem">
                                <img className="chatListItem--avatar" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                                <div className="chatListItem--lines">
                                    <div className="chatListItem--line">
                                        <div className="chatListItem--name"> Monteiro </div>
                                        <div className="chatlistItem--date"> 19:42 </div>
                                    </div>
                                    <div className="chatListItem--line">
                                        <div className="chatListItem--LastMsg">
                                            <p>Sou putinha de Deyverson</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chatListItem">
                                <img className="chatListItem--avatar" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                                <div className="chatListItem--lines">
                                    <div className="chatListItem--line">
                                        <div className="chatListItem--name"> Monteiro </div>
                                        <div className="chatlistItem--date"> 19:42 </div>
                                    </div>
                                    <div className="chatListItem--line">
                                        <div className="chatListItem--LastMsg">
                                            <p>Sou putinha de Deyverson</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chatListItem">
                                <img className="chatListItem--avatar" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                                <div className="chatListItem--lines">
                                    <div className="chatListItem--line">
                                        <div className="chatListItem--name"> Monteiro </div>
                                        <div className="chatlistItem--date"> 19:42 </div>
                                    </div>
                                    <div className="chatListItem--line">
                                        <div className="chatListItem--LastMsg">
                                            <p>Sou putinha de Deyverson</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chatListItem">
                                <img className="chatListItem--avatar" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                                <div className="chatListItem--lines">
                                    <div className="chatListItem--line">
                                        <div className="chatListItem--name"> Monteiro </div>
                                        <div className="chatlistItem--date"> 19:42 </div>
                                    </div>
                                    <div className="chatListItem--line">
                                        <div className="chatListItem--LastMsg">
                                            <p>Sou putinha de Deyverson</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chatListItem">
                                <img className="chatListItem--avatar" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                                <div className="chatListItem--lines">
                                    <div className="chatListItem--line">
                                        <div className="chatListItem--name"> Monteiro </div>
                                        <div className="chatlistItem--date"> 19:42 </div>
                                    </div>
                                    <div className="chatListItem--line">
                                        <div className="chatListItem--LastMsg">
                                            <p>Sou putinha de Deyverson</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chatListItem">
                                <img className="chatListItem--avatar" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                                <div className="chatListItem--lines">
                                    <div className="chatListItem--line">
                                        <div className="chatListItem--name"> Monteiro </div>
                                        <div className="chatlistItem--date"> 19:42 </div>
                                    </div>
                                    <div className="chatListItem--line">
                                        <div className="chatListItem--LastMsg">
                                            <p>Sou putinha de Deyverson</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
