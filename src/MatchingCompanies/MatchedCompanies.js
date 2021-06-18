import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../Main/Navs/NavBar';
import Company from '../Company/Company';
import { useHistory } from 'react-router';
import {ReactComponent as BackIcon} from '../Icons/BoldChevron.svg';
import SignUpPopup from '../Main/Components/SignUpPopup';
import disableScroll from 'disable-scroll';
import { MainContext } from '../Main/Context/MainContext';



export default function MatchedCompanies() {
    let history = useHistory();
    const {showSignUpPopup, setShowSignUpPopup, userTools, isLoggedin} = useContext(MainContext)
    const [companies, setCompanies] = useState([])
    const [index, setIndex] = useState(1);
    const [showMore, setShowMore] = useState(true)
    useEffect(() => {
        if (!!!userTools.length) history.push("/matching-companies/");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userTools })
        };
        fetch('/api/post/userTools&index=0', requestOptions)
            .then(response => response.json())
            .then(res => {setCompanies(res.map(t => t.fields))
                         if (res.length < 18) setShowMore(false);   
            });
    }, [userTools, history])
    useEffect(() => {
        if (!showSignUpPopup) {
            disableScroll.off()
        }
    }, [showSignUpPopup])
    const handleClick = () => {setShowSignUpPopup(true); disableScroll.on();}
    const handleShowMoreClick = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userTools })
        };
        fetch(`/api/post/userTools&index=${18*index}`, requestOptions)
        .then(res => res.json())
        .then(res => {
            if (!!res.length) {
                setCompanies(prevData => [...prevData, ...res.map(t => t.fields)])
                setIndex(prevIndex => prevIndex + 1);
            }else {
                setShowMore(false);
            }
        })
        .catch(console.log())
    }
    return (
        <div className="container" >
            <div className="navs">
                <NavBar />
            </div>
            <div className="matched-companies-content">
                <div className="title" onClick={() => history.push("/matching-companies/selected-tools")}>
                    <BackIcon />
                    <p >Companies that you may work in</p>  
                </div>                              
                <div className="companies">
                    {companies.map(c => <Company data={c} />)}    
                </div>
                {showMore && <div className="show-more" onClick={handleShowMoreClick}><p>Show More</p></div>}
                {!isLoggedin && <div className="sign-ask" onClick={handleClick}><p>Do you want to save your data?</p></div>}
                {showSignUpPopup && <SignUpPopup /> }
            </div>
        </div>
    )
}