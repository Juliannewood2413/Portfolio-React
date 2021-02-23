import React from 'react';
import {Button} from '../components/Button';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    FOOTER HERE
                </p>
                <p className="footer-subscription-text">
                    FOOTER TEXT
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"></input>
                        <Button buttonStyle="btn--outline">TEXT</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>TEXT</h2>
                        <Link to="/sign-up">TEXT</Link>
                        <Link to="/">TEXT</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>More Info </h2>
                        <Link to="https://juliannewood2413.github.io/Resume_file/">Resume</Link>
                        <Link to="/">TEXT</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div class='social-icons'>
                     <Link
                    class='social-icon-link facebook'
                     to='/'
                     target='_blank'
                     aria-label='Facebook'
                     >
                    <i class='fab fa-facebook-f' />
                    </Link>
                     <Link
                    class='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i class='fab fa-instagram' />
                    </Link>
                    <Link
                    class='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i class='fab fa-youtube' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <i class='fab fa-twitter' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <i class='fab fa-linkedin' />
                    </Link>
                </div>
             </div>
        </section>
        </div>
    )
}

export default Footer
