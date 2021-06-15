import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../Main/Navs/NavBar';
import Tool from '../Tool/Tool';
import {ReactComponent as NextIcon} from '../Icons/Next.svg';
import {ReactComponent as BackIcon} from '../Icons/Back.svg';
import { MainContext } from '../Main/Context/MainContext';

export default function SelectedTools() {
    let history = useHistory();
    const {userTools} = useContext(MainContext);
    useEffect(
        () => {
            if (!!!userTools.length) history.push("/matching-companies/");
        }
    , [userTools, history])
    return (
        <div className="container">
            <div className="navs">
                <NavBar />
            </div>
            <div className="st-content">
                <div className="selected-tools">
                    <p className="title">Tools that you selected</p>
                    <div className="selected-tools-items">
                        {userTools.map(item => <Tool data={item} selectedTools={true} />)}
                    </div>
                    <div className="back-icon" onClick={() => history.push("/matching-companies/")}><BackIcon /></div>
                    <div className="next-icon" onClick={() => history.push("/matching-companies/matched-companies")}><NextIcon /></div>
                </div>
            </div>

        </div>
    )
}