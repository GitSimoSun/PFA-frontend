import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import NavBar from '../Main/Navs/NavBar';
import MCItem from './MCItem';
import PythonIcon from '../Icons/python.png'
import SelectedTools from './SelectedTools';
import MatchedCompanies from './MatchedCompanies';
import {ReactComponent as NextIcon} from '../Icons/Next.svg'


export default function MatchingCompanies() {
    let history = useHistory();
    const [searchValue, setSearchValue] = useState('')
    const handleChange = (e) => setSearchValue(e.target.value);
    return (
        <div className="container">
            <div className="navs">
                <NavBar />
            </div>
            <div className="mc-content">
                <Switch>
                    <Route path="/matching-companies/" exact>
                        <div className="select-tools">
                            <p className="title">Select the tools you are using</p>
                            <div className="input-div"><input type="text" placeholder="Search" value={searchValue} onChange={handleChange} /></div>              
                            <div className="select-tools-items">
                                {Array(12).fill(0).map(item => <MCItem img={PythonIcon} name="Python" />)}
                            </div>
                            <div className="next-icon" onClick={() => history.push("/matching-companies/selected-tools")}><NextIcon /></div>
                        </div>
                    </Route>
                    <Route path="/matching-companies/selected-tools" component={SelectedTools} />
                    <Route path="/matching-companies/matched-companies" component={MatchedCompanies} />
                </Switch>
            </div>

        </div>
    )
}