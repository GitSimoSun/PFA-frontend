import React, { useState } from 'react';
import CategoryItem from '../MatchingCompanies/CategoryItem';
import PythonIcon from '../Icons/python.png'


export default function CategoryDropDown(props) {
	const [clicked, setClicked] = useState(false)
	const handleClick = () => setClicked(prevState => !prevState)
	return (
		<div className="category-dropdown">
			<div className="category-dropdown-dropdown" onClick={handleClick}>
				{props.children}
				<div className="category-name">
					<span>{props.category}</span>
					<span className="category-num">({props.num})</span>
				</div>
				<div className="category-pm">
					{clicked? <div className="bar"><div></div></div> : "+"}
				</div>
			</div>
			{clicked &&
			<div className="category-items">
				{Array(21).fill(0).map(item => <CategoryItem img={PythonIcon} name="Python" />)}
			</div>}
		</div>
	)
}
