import React from 'react'
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';

export default function Contact (props) {

    function handleContactClick() {
        document.getElementsByClassName('cards__item__link').addEventListener('click', function() {
            window.open(props.href);
        })
    }

    return (<>
        <div className="cards">
        <h1>Get in Touch</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="./images/GitHub-Mark.png"
                    text="Click to visit GitHub"
                    label="GitHub"
                    href="https://github.com/Juliannewood2413" onClick={() => {window.open("https://github.com/Juliannewood2413", "_blank")}}
                    />
                    <CardItem 
                     src="./images/linkedIn.png"
                     text="Click to visit LinkedIn"
                     label="LinkedIn"
                     href="https://github.com/Juliannewood2413" onClick={() => {window.open("https://www.linkedin.com/in/julianne-wood-1392261b5/", "_blank")}}
                    />
                </ul>

            </div>
        </div>
        
    </div>
    
    <Footer />
    </>
    )
    
}