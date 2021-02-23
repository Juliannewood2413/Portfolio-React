import React from 'react'
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';
import Footer from '../Footer';


export default function Projects () {
    return (
        <>
<div className="cards">
            <h1>Project Examples</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="./images/Edir1.png"
                        text="Explore this project"
                        label="Employee Directory"
                        path="https://juliannewood2413.github.io/Employee_directory/"
                        />
                        <CardItem 
                        src="./images/fitTracker.png"
                        text="Explore this project"
                        label="Fitness Tracker"
                        path="https://secure-temple-19782.herokuapp.com/?id=60206f6f696f6900159cc092"
                        />
                        <CardItem 
                        src="./images/budget.PNG"
                        text="Explore this project"
                        label="Budget Tracker"
                        path="https://gentle-earth-28317.herokuapp.com/"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="./images/PWgen.PNG"
                        text="Explore this project"
                        label="Password Generator"
                        path="https://juliannewood2413.github.io/PasswordGenerator/"
                        />
                        <CardItem 
                        src="./images/noteTaker.PNG"
                        text="Explore this project"
                        label="Note Taker"
                        path="https://cryptic-brushlands-37743.herokuapp.com/notes"
                        />
                        <CardItem 
                        src="./images/P2P.PNG"
                        text="Explore this project"
                        label="Peer-2-Paws Site"
                        path="https://peer-2-paws.herokuapp.com/"
                        />
                    </ul>

                </div>
            </div>
            
        </div>
        
    <Footer />
    </>

        )
    }