import React from 'react';
import {Button} from './Button';
import './Header.css';
import '../App.css'


function Header() {
    return (
        <div className='header-container'>
            <img src="/images/jeshoots.jpg"></img>
            <h1>Portfolio</h1>
            <p>See some projects</p>
            <div className="header-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer 
                <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default Header;
