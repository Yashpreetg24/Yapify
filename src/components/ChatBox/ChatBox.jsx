import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assets.profile_img} alt= ''></img>
        <p>Richard Sanford <img className='dot' src={assets.green_dot} alt=''></img></p>
        <img src={assets.help_icon} className='help' alt=''></img>
      </div>
      <div className="chat-input">
        <input type='text' placeholder='Send a message'></input>
        <input type='file' id='image' accept='image/png, image/jpeg' hidden></input>
        <label htmlFor='image'>
            <img src={assets.gallery_icon} alt=''></img>
        </label>
        <img src={assets.send_button} alt=''></img>
      </div>
    </div>
  )
}

export default ChatBox
