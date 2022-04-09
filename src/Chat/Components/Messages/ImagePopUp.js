import React, { useState } from 'react';
import { addNewMessage } from '../../Tools';
import './Messages.css'
import './ImagePopUp.css'
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
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div className="modal-body button_image">
                        <input type="file" accept='image/*' class="form-control" id="inputGroupFile02" onChange={handleUpload} />
                        <button class="input-group-text" for="inputGroupFile02" data-bs-dismiss="modal" onClick={handleImage}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagePopUp;