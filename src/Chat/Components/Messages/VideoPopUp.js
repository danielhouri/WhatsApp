import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./VideoPopUp.css"
import { addNewMessage } from '../../Tools';



function VideoPopUp(props) {
    const [videoSrc, setVideoSrc] = useState("");
    const handleVideo = (e) => {
        setVideoSrc(e.target.files[0])
        const d = new Date();
        let time = d.getHours() + ":" + d.getMinutes();
        addNewMessage(props.username, 'voice', true, time, videoSrc);
    }


    return (
        <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button" data-bs-dismiss="modal" onClick={handleVideo}>Upload</button>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" accept='video/*' id="inputGroupFile03" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPopUp
