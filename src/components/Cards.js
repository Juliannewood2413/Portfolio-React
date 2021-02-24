import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards(props) {

    // function handleCardClick() 

    return (
        <div className="cards">
            <h1>Snapshots</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="./images/Edir1.png"
                        text="Explore this project"
                        label="Employee Directory"
                        href="https://juliannewood2413.github.io/Employee_directory/"
                        />
                        <CardItem 
                        src="./images/fitTracker.png"
                        text="Explore this project"
                        label="Fitness Tracker"
                        href="https://secure-temple-19782.herokuapp.com/?id=60206f6f696f6900159cc092"
                        onClick={() => window.open("https://secure-temple-19782.herokuapp.com/?id=60206f6f696f6900159cc092")}
                        />
                        <CardItem 
                        src="./images/budget.PNG"
                        text="Explore this project"
                        label="Budget Tracker"
                        href="https://gentle-earth-28317.herokuapp.com/"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="./images/PWgen.PNG"
                        text="Explore this project"
                        label="Password Generator"
                        href="https://juliannewood2413.github.io/PasswordGenerator/"
                        />
                        <CardItem 
                        src="./images/noteTaker.PNG"
                        text="Explore this project"
                        label="Note Taker"
                        href="https://cryptic-brushlands-37743.herokuapp.com/notes"
                        />
                        <CardItem 
                        src="./images/P2P.PNG"
                        text="Explore this project"
                        label="Peer-2-Paws Site"
                        href="https://peer-2-paws.herokuapp.com/"
                        />
                    </ul>

                </div>
            </div>
            
        </div>
    )
}

export default Cards
