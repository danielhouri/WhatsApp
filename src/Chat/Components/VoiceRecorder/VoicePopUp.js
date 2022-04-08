import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { addNewMessage } from '../../Tools';
import useRecorder from './UseRecorder';

function VoicePopUp(props) {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    const handleStartRecording = () => {
        startRecording();
    }

    const handleStopRecording = () => {
        stopRecording();
        const d = new Date();
        let time = d.getHours() + ":" + d.getMinutes();
        addNew(time)
    }

    const addNew = (time) => {
        addNewMessage(props.username, 'voice', true, time, audioURL);
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} className="modal_record">
                <Modal.Header closeButton>
                    <audio src={audioURL} controls />
                </Modal.Header>
                <Modal.Body>
                    <Button variant="primary" onClick={handleStartRecording} disabled={isRecording}>
                        Record
                    </Button>
                    <Button variant="primary" onClick={handleStopRecording} disabled={!isRecording}>
                        Stop Recording
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default VoicePopUp
