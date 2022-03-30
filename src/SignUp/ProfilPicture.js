import React from 'react';
import './ProfilPicture.css';

const ImgUpload = ({
    onChange,
    src
}) =>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload" >
            <img htmlFor="photo-upload" src={src} />
        </div>
        <input id="photo-upload" type="file" onChange={onChange} />
    </label>


class ProfilPicture extends React.Component {
    state = {
        file: '',
        imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
    }

    photoUpload = e => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    }

    render() {
        const { imagePreviewUrl } = this.state;
        return (
            <div>
                <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
            </div>
        )
    }
}

export default ProfilPicture;

