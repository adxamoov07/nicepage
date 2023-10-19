import React, { useState } from 'react'
import './Header.css'
import { FaBars } from 'react-icons/fa6'
import { HiMiniXMark } from 'react-icons/hi2'
import { Link } from 'react-router-dom'


function Header() {

  const [openSidebar, setOpenSidebar] = useState(false);
  openSidebar ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  return (

    <div className='header'>
      <h1>Office Design Gallery</h1>
      <FaBars onClick={() => setOpenSidebar(true)} />
      {openSidebar &&

        <div className="barses">
          <div className="barses_item">
            <HiMiniXMark onClick={() => setOpenSidebar(false)} className='HiMiniXMark' />
            <div className="bars_item_box">
              <h3><Link to={"/"}>Home</Link></h3>
              <h3><Link to={"/page1"}>Page 1</Link></h3>
              <h3><Link to={"/page2"}>Page 2</Link></h3>
              <h3><Link to={"/page3"}>Page 3</Link></h3>
              <h3><Link to={"/page4"}>Page 4</Link></h3>
              <h3><Link to={"/page5"}>Page 5</Link></h3>

            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Header