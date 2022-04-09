import React, { useState } from 'react';
import { addNewMessage } from '../../Tools';
import './Messages.css'

function ImagePopUp(props) {
    const [imageoSrc, setImageSrc] = useState("");

    const handleImage = () => {
        const d = new Date();
        let time = d.getHours() + ":" + d.getMinutes();
        let temp = URL.createObjectURL(imageoSrc);
        addNewMessage(props.username, 'image', true, time, temp);
        props.setRefresh(props.refresh + 1);
    }
    const handleUpload = (e) => {
        setImageSrc(e.target.files[0]);
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div className="modal-body button_image">
                            <input type="file" class="form-control" id="inputGroupFile02" onChange={handleUpload} />
                            <label class="input-group-text" for="inputGroupFile02" onClick={handleImage}>Upload</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagePopUp;
