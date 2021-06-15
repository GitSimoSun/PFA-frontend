import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import getToolByName from "../Functions/getToolByName";


export default function Company({data}) {
    let history = useHistory();
    const [popTools, setPopTools] = useState([]);

    useEffect(() => {
            if (data["top_tools"]){
                const arr = JSON.parse(data["top_tools"].replaceAll("'", '"'))
                arr.map(t => getToolByName(t, setPopTools))
            }
    }, [data])

	return (
		<div className="company">
            <div onClick={() => history.push("/companies/" + data.name)}>          
                <img src={data.logo} alt="company icon"/>
                <p className="company-name">{data.name}</p>
                <div className="company-description">
                    <p>{data.description}</p>
                </div>
            </div>
            <div className="popular-tools">
                <p>POPULAR TOOLS IN STACK</p>
                <div className="popular-tools-tools">
                    {popTools.map(i => <img src={i.logo} alt="tool-icon" />)}
                </div>
            </div>
		</div>
	)
}
