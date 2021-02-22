import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these project examples</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/image here"
                        text="Explore this repo"
                        label="Adventure"
                        path="/repolink"
                        />
                        <CardItem 
                        src="images/image here"
                        text="Second Repo/Project"
                        label="Project 2"
                        path="/repolink"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/image here"
                        text="Explore this repo"
                        label="Adventure"
                        path="/repolink"
                        />
                        <CardItem 
                        src="images/image here"
                        text="Second Repo/Project"
                        label="Project 2"
                        path="/repolink"
                        />
                        <CardItem 
                        src="images/image here"
                        text="Second Repo/Project"
                        label="Project 2"
                        path="/repolink"
                        />
                    </ul>

                </div>
            </div>
            
        </div>
    )
}

export default Cards
