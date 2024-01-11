import React from 'react';
import HeaderLink from './headerLink/HeaderLink';
import "./Header.css";


export default function Header() {
    return (
        <header className='header'>
            <nav className='header__nav-bar'>
                <HeaderLink to="/" title="Главная" />
                <HeaderLink to="/favourites" title="Избранное" />
                <HeaderLink to="/shopping-cart" title="Корзина" />
            </nav>
            <h1 className='header__title'>TEST</h1>
        </header>
    )
}
