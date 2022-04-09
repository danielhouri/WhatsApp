import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./ImagePopUp.css"

function ImagePopUp(props) {

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button" data-bs-dismiss="modal">Upload</button>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" accept='image/*' id="inputGroupFile03" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagePopUp
