import React from 'react';
import { NavLink } from 'react-router-dom';




export default function MainToolsBar() {
    return (
        <nav className="main-toolsbar">
            <ul className="main-toolsbar-links">
                <li>
                    <NavLink to="/tools/app-data" activeClassName="active-link">
                        <p>Application and Data</p>
                        <div className="triangle"></div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tools/utilities" activeClassName="active-link">
                        <p>Utilities</p>
                        <div className="triangle"></div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tools/devops" activeClassName="active-link">
                        <p>DevOps</p>
                        <div className="triangle"></div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tools/business-tools" activeClassName="active-link">
                        <p>Business Tools</p>
                        <div className="triangle"></div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}