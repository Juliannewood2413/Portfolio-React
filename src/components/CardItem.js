import React from 'react';
import {Link} from 'react-router-dom';

function CardItem({href, label, src, text}) {

    return (
        <>
          <li className="cards__item">
              <Link className="cards__item__link" target="_blank" href={href}>
                  <figure className="cards__item__pic-wrap" data-category={label}>
                      <img src={src} alt="Image" className="cards__item__img"></img>
                  </figure>
                  <div className="cards__item__info">
                      <h5 className="cards__item__text">{text}</h5>
                  </div>
              </Link>
          </li>  
        </>
    )
}

export default CardItem
