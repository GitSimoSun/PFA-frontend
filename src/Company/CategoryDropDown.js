import React, { useEffect, useState } from 'react';
import CategoryItem from '../MatchingCompanies/CategoryItem';
import getToolByName from "../Functions/getToolByName";


export default function CategoryDropDown(props) {
	const [clicked, setClicked] = useState(false)
	const [data, setData] = useState([])
    useEffect(() => {
		console.log(props.data);
		props.data.map(t => {return {name: t, logo: getToolByName(t, setData)}})
	}, [props.data])
	const handleClick = () => setClicked(prevState => !prevState)
	return (
		<div className="category-dropdown">
			<div className="category-dropdown-dropdown" onClick={handleClick}>
				{props.children}
				<div className="category-name">
					<span>{props.category}</span>
					<span className="category-num">({props.data.length})</span>
				</div>
				<div className="category-pm">
					{clicked? <div className="bar"><div></div></div> : "+"}
				</div>
			</div>
			{clicked &&
			<div className="category-items">
				{data.map(item => <CategoryItem img={item.logo} name={item.name} />)}
			</div>}
		</div>
	)
}
