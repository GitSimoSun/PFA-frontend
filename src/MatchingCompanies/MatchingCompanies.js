import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import NavBar from '../Main/Navs/NavBar';
import MCItem from './MCItem';
import SelectedTools from './SelectedTools';
import MatchedCompanies from './MatchedCompanies';
import {ReactComponent as NextIcon} from '../Icons/Next.svg'
import { MainContext } from '../Main/Context/MainContext';


export default function MatchingCompanies() {
    let history = useHistory();
    const {userTools} = useContext(MainContext)
    const [searchValue, setSearchValue] = useState('');
    const [tools, setTools] = useState([]);
    
    useEffect( () => {
        fetch(`/api/tools&namecontain=simosun`)
        .then(res => res.json())
        .then(res => setTools(res.map(t => t.fields)))
        .catch(console.log());
    }, [])

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        fetch(`/api/tools&namecontain=${e.target.value}`)
        .then(res => res.json())
        .then(res => setTools(res.map(t => t.fields)))
        .catch(console.log());
    }
    const handleClick = (e) => {
        if(!!userTools.length) history.push("/matching-companies/selected-tools");
        else alert("Select at least one tool first!!")
    }
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
                                {tools.map(t => <MCItem data={t} />)}
                            </div>
                            <div className="next-icon" onClick={handleClick}><NextIcon /></div>
                        </div>
                    </Route>
                    <Route path="/matching-companies/selected-tools" component={SelectedTools} />
                    <Route path="/matching-companies/matched-companies" component={MatchedCompanies} />
                </Switch>
            </div>

        </div>
    )
}