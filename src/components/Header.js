import React from 'react';
import {Button} from './Button';
import './Header.css';
import '../App.css'


function Header() {
    return (
        <div className='header-container'>
            {/* <video src='/videos/video.mp4' autoPlay loop muted /> */}
            <h1>Welcome!</h1>
            <p>
              I'm Jules, a front-end web designer with the goal of making fun and exciting websites, one line of code at a time!
            </p>
            <p>  
               Feel free to click on the 'projects' link above, scroll down to see project snapshots, or follow the contact link to get in touch!
            </p>
            {/* <div className="header-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            </div> */}
        </div>
    )
}

export default Header;
