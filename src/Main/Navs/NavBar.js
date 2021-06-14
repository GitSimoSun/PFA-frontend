import React from 'react';
import {ReactComponent as Logo} from '../../Icons/Logo.svg';
import { NavLink } from 'react-router-dom';




export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Logo />
                <p className="wname">Website's name</p>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink to="/tools" activeClassName="active-link">
                        Tools
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/companies" activeClassName="active-link">
                        Companies
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/matching-companies" activeClassName="active-link">
                        Matching Companies
                    </NavLink>
                </li>
            </ul>
            <div className="sign-btns">
                <input type="button" id="sign-in" value="Sign in" />
                <input type="button" id="sign-up" value="Sign up" />
            </div>
        </nav>
    )
}