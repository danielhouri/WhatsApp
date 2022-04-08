import React from 'react'
import { Button, Modal } from 'react-bootstrap';

function VoicePopUp(props) {
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} className="modal_record">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="primary" className="button_voice">
                        Record
                    </Button>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default VoicePopUp
