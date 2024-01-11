import React from 'react';
import { NavLink } from 'react-router-dom';
import "./HeaderLink.css";

export default function HeaderLink({ to, title }) {
    return (
        <NavLink to={to} className="headerr-link">
            {title}
        </NavLink>
    )
}
