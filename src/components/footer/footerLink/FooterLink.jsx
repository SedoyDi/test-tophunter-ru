import React from 'react';
import "./FooterLink.css";
import { Link } from 'react-router-dom';

export default function FooterLink({ img, to }) {
    return (
        <li>
            <Link to={to} className='footer-link' target='_blank' rel="noopener noreferrer">
                <img src={img} className='footer-link__img' alt="иконка" />
            </Link>
        </li>
    )
}