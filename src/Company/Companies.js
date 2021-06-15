import React, { useState, useEffect } from 'react';
import NavBar from '../Main/Navs/NavBar';
import Company from './Company';
import {  Route, Switch } from 'react-router';
import CompanyProfile from './CompanyProfile';

export default function Companies() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(1);
    const [show, setShow] = useState(true)
    useEffect(
        () => {
            fetch(`/api/companies`)
            .then(res => res.json())
            .then(res => setData([...res]))
            .catch(console.log());
        }
    , [])
    const handleClick = () => {
        fetch(`/api/companies&index=${25*index}`)
        .then(res => res.json())
        .then(res => {
            if (!!res.length) {
                setData(prevData => [...prevData, ...res])
                setIndex(prevIndex => prevIndex + 1);
            }else {
                setShow(false);
            }
        })
        .catch(console.log())
    }

    return (
        <div className="container">
            <div className="navs">
                <NavBar />
            </div>
            <Switch>
                <Route path="/companies/" exact>
                    <div>
                        {
                            !!data.length?
                            <div className="company-content">
                                <p className="title">Popular Tech Companies</p>  
                                <div className="companies">
                                    {data.map(t => <Company data={t} />)}  
                                </div>
                                {show && <div className="show-more" onClick={handleClick}><p>Show More</p></div>}
                            </div>
                            : <div onClick={() => console.log(data)}>loding...</div>
                        }
                    </div>
                </Route>
                <Route path="/companies/:company" component={CompanyProfile} />
            </Switch>

        </div>
    )
}