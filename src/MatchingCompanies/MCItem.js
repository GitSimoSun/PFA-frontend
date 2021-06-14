import React from 'react';


export default function MCItem(props) {

	return (
        <div className="mc-item">
            <img src={props.img} alt="item logo" />
            <p>{props.name}</p>
            <div className="item-use"><p>+ I use this</p></div>
        </div>
	)
}
