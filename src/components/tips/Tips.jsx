import React from 'react'
import './Tips.css'

function Tips() {
    return (
        <div className='tips'>
            <div className="tips_left">
                <h1>
                    Tips for designing <br />
                    a modern office</h1>
                    <div><h1>01</h1> <p>Open up the space</p></div>
                    <div><h1>02</h1> <p>Introduce more light</p></div>
                    <div><h1>03</h1> <p>Consider glass partitions</p></div>
            </div>
            <div className="tips_right">
                <img src="https://images01.nicepage.com/6f/ef/6fefae6e5b483d19430b172da4da2bd3.jpeg" alt="" />
            </div>
        </div>
    )
}

export default Tips