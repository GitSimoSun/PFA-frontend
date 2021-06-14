import React from 'react';
import Icon from '../Icons/pinterest.png'
import Python from '../Icons/python.png'

export default function Company(props) {

	return (
		<div className="company">
            <div onClick={props.onClick}>          
                <img src={Icon} alt="company icon"/>
                <p className="company-name">Pinterest</p>
                <div className="company-description">
                    <p>Pinterest is a social bookmarking site where users collect and share photos of their favorite events ...</p>
                </div>
            </div>
            <div className="popular-tools">
                <p>POPULAR TOOLS IN STACK</p>
                <div className="popular-tools-tools">
                    {Array(5).fill(0).map(i => <img src={Python} alt="tool-icon" />)}
                </div>
            </div>
		</div>
	)
}
