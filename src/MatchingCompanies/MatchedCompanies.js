import React, { useContext } from 'react';
import NavBar from '../Main/Navs/NavBar';
import Company from '../Company/Company';
import { useHistory } from 'react-router';
import {ReactComponent as BackIcon} from '../Icons/BoldChevron.svg';
import SignUpPopup from '../Main/Components/SignUpPopup';
import disableScroll from 'disable-scroll';
import { MainContext } from '../Main/Context/MainContext';



export default function MatchedCompanies() {
    let history = useHistory();
    const {show, setShow} = useContext(MainContext)
    const handleClick = () => {setShow(true); disableScroll.on();}

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
                    {Array(15).fill(0).map(i => <Company onClick={() => history.push("/companies/pinterest")} />)}    
                </div>
                <div className="show-more"><p>Show More</p></div>
                <div className="sign-ask" onClick={handleClick}><p>Do you want to save your data?</p></div>
                {show && <SignUpPopup /> }
            </div>
        </div>
    )
}