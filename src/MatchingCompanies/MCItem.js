import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../Main/Context/MainContext';


export default function MCItem({data}) {
    const {userTools, setUserTools} = useContext(MainContext);
    const [selected, setSelected] = useState(false);
    useEffect(
        () => {
            setSelected(userTools.some(t => t.name === data.name), userTools, data);
        }
    , [userTools, data])
    const handleClick = (e) => {
        if(selected){
            setUserTools(prevData => prevData.filter(t => t.name !== data.name))
            setSelected(false)
        } else {
            setUserTools(prevData => [...prevData, data])
            setSelected(true)
        }
    }
	return (
        <div className="mc-item" onClick={handleClick}>
            <img src={data.logo} alt="item logo" />
            <div className="mc-item-name"><p>{data.name}</p></div>
            <div className="item-use"><p>{!selected? "+ I use this" : "- I don't use this"}</p></div>
        </div>
	)
}
