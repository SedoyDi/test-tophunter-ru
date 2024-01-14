import React, { useState } from 'react'
import "./Card.css";
import plug from "../../../images/plug.svg";
import favIconR from "../../../images/favorite_r.svg";
import favIconW from "../../../images/favorite_w.svg";

export default function Card({ data, hendlerFav, hendlerShoppingCart }) {

    const [isFav, setIsFav] = useState(false);
    const [isShoppingCart, setIsShoppingCart] = useState(false);
    const picture = data.picture ? data.picture : plug;
    const favIcon = isFav ? favIconR : favIconW;

    function changeFav(card) {
        hendlerFav(card);
        setIsFav(!isFav);
    };

    function changeShoppingCart(card) {
        hendlerShoppingCart(card);
        setIsShoppingCart(!isShoppingCart);
    };
    return (
        <li className='card'>
            <div className='card__container'>
                <h2 className='card__title'>{data.name}</h2>
                <button type='button' className='card__button_add_favourites' onClick={() => changeFav(data)}>
                    <img src={favIcon} alt='icon' />
                </button>
            </div>
            <img className='card__img' src={picture} alt="фото" />
            <span className='card__quantity' >на складе {data.quantity} шт</span>
            <div className='card__container'>
                <span className='card__price' >{data.price} &#8381;</span>
                <button
                    type='button'
                    className='card__button_add_shopping-cart'
                    disabled={data.quantity === 0 ? 'diasabled' : ''}
                    onClick={() => {
                        changeShoppingCart(data);
                    }} >{isShoppingCart ? 'Удалить из корзины' : 'В корзину'}</button>
            </div>

        </li>
    )
}
