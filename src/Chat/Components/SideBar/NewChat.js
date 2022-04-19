import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ErrorMessage from '../../../ErrorMessage/ErrorMessage';
import { addNewContact, getNicknameByUsername, getUsernameChat } from '../../Tools';
import logHistory from '../ChatLog';

function NewChat(props) {

    const textBox = useRef(null);
    const [show, setShow] = useState(false);
    const [messageErr, setMessageErr] = useState('');

    const handleMessage = () => {
        let state = ' is not register';
        let searchSelf = false;
        if (textBox.current.value == props.username) {
            state = ' it\'s your own username';
            searchSelf = true;
        }
        else if (!searchSelf && getUsernameChat(textBox.current.value, props.username) != '') {
            state = ' already started a chat with you';
        }
        let temp = 'username: ' + textBox.current.value + state;
        setMessageErr(temp);
    }

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const handleAddClose = () => {
        let txt = textBox.current.value;
        if (getNicknameByUsername(txt) != "" && txt && getUsernameChat(txt, props.username) == '' && txt != props.username) {
            addNewContact(txt, props.username);
            props.handleClose();
            props.setSearchQuery(logHistory[props.username]);
        }
        else {
            props.handleClose();
            handleMessage()
            handleOpen()
        }
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Chat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="recipient-name" className="col-form-label">Enter username:</label>
                    <input ref={textBox} className="form-control new_chat" onKeyPress={(e) => e.key === 'Enter' && handleAddClose()}></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddClose}>
                        Add new contact
                    </Button>
                </Modal.Footer>
            </Modal>
            <ErrorMessage show={show} handleClose={handleClose} page={"Error invalid username"} message={messageErr} />

        </div>
    )
}

export default NewChat;
