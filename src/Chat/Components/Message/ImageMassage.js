import React from 'react'

function ImageMassage(props) {
  return (
    <p className={props.side ? 'messages_body_message message_receiver' : 'messages_body_message'}>
    <img src={props.imageSrc} controls />
    <span className="sidebarchat_time noselect"> {props.message_time} </span>
</p>
  )
}

export default ImageMassage
