import React from 'react'
import './LeftSideBar.css'
import assets from '../../assets/assets'

const LeftSideBar = () => {
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
            <img src={assets.logo} className='logo' alt=''></img>
            <div className="menu">
                <img src={assets.menu_icon} alt=''></img>
                <div className="sub-menu">
                    <p>Edit Profile</p>
                    <hr />
                    <p>Logout</p>
                </div>
            </div>
        </div>
        <div className="ls-search">
            <img src={assets.search_icon} alt=''></img>
            <input type='text' placeholder='Search here..'></input>
        </div>
      </div>
      <div className="ls-list">
        {Array(12).fill("").map((item, index)=>(
            <div key={index} className="friends">
            <img src={assets.profile_img} alt=''></img>
            <div>
                <p>Richard Sandofrd</p>
                <span>Hello, How are you?</span>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSideBar
