import React, { useContext, useEffect } from 'react';
import {ReactComponent as Logo} from '../../Icons/Logo.svg';
import { NavLink } from 'react-router-dom';
import { MainContext } from '../Context/MainContext';
import disableScroll from 'disable-scroll';
import SignUpPopup from '../Components/SignUpPopup';
import SignInPopup from '../Components/SignInPopup';



export default function NavBar() {

    const {isLoggedin, setIsLoggedin, showSignUpPopup, setShowSignUpPopup, showSignInPopup, setShowSignInPopup, setUserTools} = useContext(MainContext);

    useEffect(() => {
        if (!showSignUpPopup && !showSignInPopup) {
            disableScroll.off()
        }
    }, [showSignUpPopup, showSignInPopup])

    const handleClickSignUp = () => {setShowSignUpPopup(true); disableScroll.on();}
    const handleClickSignIn = () => {setShowSignInPopup(true); disableScroll.on();}

    const handleLogout = e => {
        e.preventDefault();
    
        fetch('/api/v1/users/auth/logout/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
          }
        })
          .then(res => res.json())
          .then(data => {
            setIsLoggedin(false);
            setUserTools([]);
            localStorage.clear();
          });
      };

    return (
        <nav className="navbar">
            <div className="logo">
                <Logo />
                <p className="wname">Devsolutions</p>
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
            {isLoggedin?
                <div className="sign-btns">
                    <input type="button" id="sign-out" value="Sign out" onClick={handleLogout} />
                </div>
            :
                <div className="sign-btns">
                    <input type="button" id="sign-in" value="Sign in" onClick={handleClickSignIn} />
                    <input type="button" id="sign-up" value="Sign up" onClick={handleClickSignUp} />
                </div>
            }
            {showSignUpPopup && <SignUpPopup /> }
            {showSignInPopup && <SignInPopup /> }
        </nav>
    )
}