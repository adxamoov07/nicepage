import React from 'react'
import './Footer.css'
import {BsFacebook, BsTelegram, BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer_top">
        <div className="footer_top_box">
          <h1>Office Design Gallery</h1>
          <div className="footer_top_box_icon">
          <BsFacebook/>
          <BsTelegram/>
          <BsTwitter/>

          </div>
        </div>
        <div className="footer_top_box_line">
        </div>
        Office Design Gallery brings you our hand picked selection of the best office <br /> design pictures.footer text
      </div>

      <div className="footer_bottom">
        <p>Website Templates created with Website Builder Software.</p>
      </div>
    </div>
  )
}

export default Footer