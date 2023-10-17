import React from 'react'
import './Cards.css'
import img1 from '../../assents/img1.jpg'
import img2 from '../../assents/img2.jpg'
import img3 from '../../assents/img3.jpg'
import img4 from '../../assents/img4.jpg'
import img5 from '../../assents/img5.jpg'
import img6 from '../../assents/img6.jpg'


function Cards() {
  return (
    <div className='cards'>
      <div className="cards_item">
        <img src={img1} alt="" />
        <h3>GALLERY</h3>
      </div>
      <div className="cards_item">
        <img src={img2} alt="img" />
        <h3>IDEAS</h3>
      </div>
      <div className="cards_item">
        <img src={img3} alt="img" />
        <h3>AWARDS</h3>
      </div>
      <div className="cards_item">
        <img src={img4} alt="img" />
        <h3>FEATURES</h3>
      </div>
      <div className="cards_item">
        <img src={img5} alt="img" />
        <h3>DESIGN</h3>
      </div>
      <div className="cards_item">
        <img src={img6} alt="img" />
        <h3>SUPPORT</h3>
      </div>
    </div>
  )
}

export default Cards