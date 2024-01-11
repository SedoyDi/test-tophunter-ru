import React from 'react'
import "./Card.css";

export default function Card(props) {
    return (
        <li className='card'>
            <h2 className='card__title'>{props.name}</h2>
            <img className='card__img' src={props.picture} alt="фото" />
            <div className='card__container'>
                <span className='card__price' >{props.price}</span>
                <button type='button' className='card__button_add_shopping-cart'>В корзину</button>
            </div>
            <button type='button' className='card__button_add_favourites' />
        </li>
    )
}
