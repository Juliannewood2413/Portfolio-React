import React from 'react';
import {Button} from '../components/Button';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {


    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Contact Info
                </p>
                {/* <p className="footer-subscription-text">
                    FOOTER TEXT
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"></input>
                        <Button buttonStyle="btn--outline">TEXT</Button>
                    </form>
                </div> */}
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link 
                        href="https://www.linkedin.com/in/julianne-wood-1392261b5/"
                        onClick={() => {window.open("https://www.linkedin.com/in/julianne-wood-1392261b5/", "_blank")}}>LinkedIn <i class="fab fa-linkedin fa-1x"></i></Link>
                        <Link href="https://github.com/Juliannewood2413" onClick={() => {window.open("https://github.com/Juliannewood2413", "_blank")}}>GitHub <i class="fab fa-github fa-1x"></i></Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>More Info </h2>
                        <Link href="https://drive.google.com/file/d/15Pik888YNvv164qiO4CFtUtShNrytsxp/view?usp=sharing" onClick={() => {window.open("https://drive.google.com/file/d/15Pik888YNvv164qiO4CFtUtShNrytsxp/view?usp=sharing")}}>Resume <i class="fas fa-paperclip fa-1x"></i></Link>
                        <Link href="https://github.com/Juliannewood2413" onClick={() => {window.open("https://github.com/Juliannewood2413", "_blank")}}>GitHub <i class="fab fa-github fa-1x"></i></Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
