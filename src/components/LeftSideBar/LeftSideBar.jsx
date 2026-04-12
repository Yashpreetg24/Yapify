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
            </div>
        </div>
        <div className="ls-search">
            <img src={assets.search_icon} alt=''></img>
            <input type='text' placeholder='Search here..'></input>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar
