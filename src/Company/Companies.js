import React from 'react';
import NavBar from '../Main/Navs/NavBar';
import Company from './Company';
import {  Route, Switch, useHistory } from 'react-router';
import CompanyProfile from './CompanyProfile';

export default function Companies() {
    let history = useHistory();
    return (
        <div className="container">
            <div className="navs">
                <NavBar />
            </div>
            <Switch>
                <Route path="/companies/" exact>
                    <div className="company-content">
                        <p className="title">Popular Tech Companies</p>  
                        <div className="companies">
                            {Array(15).fill(0).map(i => <Company onClick={() => history.push("/companies/pinterest")} />)}    
                        </div>
                        <div className="show-more"><p>Show More</p></div>
                    </div>
                </Route>
                <Route path="/companies/pinterest" component={CompanyProfile} />
            </Switch>

        </div>
    )
}