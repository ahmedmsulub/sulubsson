import React from 'react';

import './Card.css'


const Card=(props)=> {

    return (
        <div>
            {/* <div class="light"></div> */}
            <div data-aos='fade-up' className="box">
            <div  className="card">
                <div  className="card-heading">
                    <h1>LOGO</h1>
                </div>
                <div className="card-logo card-content">
                    <p>Whether it’s your newest endeavour or a rebrand, logo design is the first step.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-heading">
                    <h1>WEBSITE DESIGN</h1>
                </div>
                <div className="card-content">
                    <p>It’s the digital storefront to your business so why not make it the nicest on the block?</p>
                </div>
            </div>
            <div  className="card">
                <div className="card-heading">
                    <h1>Mobile Friendliness</h1>
                </div>
                <div className="card-content">
                    <p> creating a mobile-friendly website is no longer an option—it’s a necessity. It all starts with responsive web design.</p>
                </div>
            </div>
            </div>

        </div>
    )
}


export default Card

