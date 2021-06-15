import React, { useState, useEffect } from 'react';
import CategoryDropDown from './CategoryDropDown';
import {ReactComponent as AppDataIcon} from '../Icons/AppData.svg'
import {ReactComponent as BusinessToolsIcon} from '../Icons/BusinessTools.svg'
import {ReactComponent as DevOpsIcon} from '../Icons/DevOps.svg'
import {ReactComponent as UtilitiesIcon} from '../Icons/Utilities.svg'
import { useParams } from 'react-router-dom';

export default function CompanyProfile() {
    let params = useParams();
    const [data, setData] = useState({});
    const [tools, setTools] = useState({});
    useEffect(
        () => {
            fetch(`/api/companies&name=${params.company}`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(console.log());
        }
    , [params.company])
    useEffect (
        () => {
            !!data.tools && setTools(JSON.parse(data.tools));
        }
    , [data.tools])

	return (
        <>
            {!!Object.entries(tools).length && (<div className="company-profile">
                <div className="company-details">
                    <div className="company-details-details">                            
                        <img src={data.logo} alt="company icon"/>
                        <div>
                            <p className="company-name">{data.name}</p>
                            <div className="company-description">
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                {tools["Application and Data"] && <CategoryDropDown category="Application and Data" data={tools["Application and Data"]} >
                    <AppDataIcon />
                </CategoryDropDown>}
                {tools["Utilities"] && <CategoryDropDown category="Utilities" data={tools["Utilities"]} >
                    <UtilitiesIcon />
                </CategoryDropDown>  }          
                {tools["DevOps"] && <CategoryDropDown category="DevOps" data={tools["DevOps"]} >
                    <DevOpsIcon />
                </CategoryDropDown>}
                {tools["Business Tools"] && <CategoryDropDown category="Business Tools" data={tools["Business Tools"]} >
                    <BusinessToolsIcon />
                </CategoryDropDown>}
                </div>
            </div>)}
        </>
	)
}
