import React from 'react';


export default function CategoryItem(props) {

	return (
        <div className="category-item">
            <img src={props.img} alt="item logo" />
            <p>{props.name}</p>
        </div>
	)
}
