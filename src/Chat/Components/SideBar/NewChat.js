import React, { useRef } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { addNewContact } from '../../Tools';
function NewChat(props) {
    const textBox = useRef(null);
    const handleAddClose = () => {
        addNewContact(textBox.current.value);
        props.handleClose();
    }
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Chat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                    <input ref={textBox} className="form-control new_chat" onKeyPress={(e) => e.key === 'Enter' && handleAddClose()}></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddClose}>
                        Add new contact
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NewChat
