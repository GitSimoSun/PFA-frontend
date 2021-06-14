import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import '../Main/Styles/Home.css';



export default function Home() {
    let history = useHistory();
    const handleClick = () => history.push("/tools")
    return (
        <div className="home-container">
            <nav className="home-navbar">
                <ul className="home-navbar-nav">
                    <li>
                        <Link to="/">
                            Sign in
                        </Link>
                    </li>
                    <li>
                        <Link to="/"> 
                            Sign up
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="home-content">
                <div className="home-big-title">
                    <p>Explore App Developement  </p>
                    <p>Tools That 26.9 Million</p>
                    <p> Developers Love</p>
                </div>
                <input type="button" value="Explore" onClick={handleClick} />
            </div>
            
        </div>
    )
}