import React from 'react'
import "./Footer.css";
import mailIcon from "../../images/mail_icon.svg";
import vkIcon from "../../images/vk_icon.svg";
import telegramIcon from "../../images/telegram_icon.svg";
import youtubeIcon from "../../images/youtube_icon.svg";
import FooterLink from './footerLink/FooterLink';

export default function Footer() {
    return (
        <footer className='footer'>
            <ul className='footer__link-bar'>
                <FooterLink img={mailIcon} to="#" />
                <FooterLink img={vkIcon} to="#" />
                <FooterLink img={telegramIcon} to="#" />
                <FooterLink img={youtubeIcon} to="#" />
            </ul>
        </footer>
    )
}
