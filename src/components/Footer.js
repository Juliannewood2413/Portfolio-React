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
                        <Link to="https://www.linkedin.com/in/julianne-wood-1392261b5/">LinkedIn <i class="fab fa-linkedin fa-1x"></i></Link>
                        <Link to="https://github.com/Juliannewood2413">GitHub <i class="fab fa-github fa-1x"></i></Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>More Info </h2>
                        <Link to="https://juliannewood2413.github.io/Resume_file/">Resume <i class="fas fa-paperclip fa-1x"></i></Link>
                        <Link to="https://github.com/Juliannewood2413">GitHub <i class="fab fa-github fa-1x"></i></Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
