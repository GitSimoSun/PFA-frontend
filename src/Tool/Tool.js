import React, { useState, useContext } from 'react';
import setNumber from '../Functions/setNumber';
import { MainContext } from '../Main/Context/MainContext';

export default function Tool({data, selectedTools}) {
    const {setUserTools} = useContext(MainContext)
    const [showRemove, setShowRemove] = useState(false);
    const handleClick = (e) => {
        setUserTools(prevData => prevData.filter(t => t.name !== data.name))
    }
    const handleMouseOver = () => setShowRemove(true);
    const handleMouseLeave = () => setShowRemove(false);
	return (
		<div className="tool" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {selectedTools && showRemove && <div className="remove_tool" onClick={handleClick}>x</div>} 
            <div className="tool_name_icon">         
                <p className="tool-name">{data.name}</p>
                <img src={data.logo} alt="tool icon"/>
            </div>
            <div className="type-container">
                <div className="type">
                    <p>{data.category}</p>
                </div>                
            </div>

            <div className="stack-num">
                <p>Stacks</p>
                <p>{setNumber(data.stacks_num)}</p>
            </div>
		</div>
	)
}
