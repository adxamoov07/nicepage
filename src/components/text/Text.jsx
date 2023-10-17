import React from 'react'
import './Text.css'

function Text() {
  return (
    <div className='text'>
      <div className="text_left">
        <h1>The coolest workplaces <br /> offices in the world</h1>
        <p>Best office design of group layout. Are coolest workplaces offices in the world. Architecture studio arquitectes life. Home office best design interior luxury offices. Office design ideas make work my home organization. Home office setup ideas offices in small furniture layout. Office interior design dreams house furniture cool interiors. Interior ideas decorating a home office of bamboo rod. Home office space ideas design small decorating. Bloc offices new york city office snapshots modern design. </p>
        <button>read more</button>
      </div>
      <div className="text_right">
        <div className="text_right_item1">
          <img src="https://images01.nicepage.com/09/44/09445c0c818518d10fbacd13939d98bb.jpeg" alt="" />
        </div>
        <div className="text_right_item">
          <div className="text_right_item_box">
              <h1>10</h1>
              <i>Office Ideas</i>
          </div>
          <i>Monday Consulting, an IT consultancy company based <br /> in Hamburg, Germany</i>
        </div>
      </div>
    </div>
  )
}

export default Text