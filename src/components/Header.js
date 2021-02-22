import React from 'react';
import {Button} from './Button';
import './Header.css';
import '../App.css'


function Header() {
    return (
        <div className='header-container'>
            <img src="/images/jeshoots.jpg"></img>
            <h1>Portfolio</h1>
            <p>
              Hi! I'm Jules, a front-end web designer with the goal of making fun and exciting websites, one line of code at a time!
              
               Feel free to click on the portfolio link above to see examples, or follow the contact link to get in touch!
            </p>
            <div className="header-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            </div>
        </div>
    )
}

export default Header;
