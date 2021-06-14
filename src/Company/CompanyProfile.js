import React from 'react';
import Icon from '../Icons/pinterest.png'
import {ReactComponent as LinkIcon} from '../Icons/openLink.svg'
import CategoryDropDown from './CategoryDropDown';
import {ReactComponent as AppDataIcon} from '../Icons/AppData.svg'
import {ReactComponent as BusinessToolsIcon} from '../Icons/BusinessTools.svg'
import {ReactComponent as DevOpsIcon} from '../Icons/DevOps.svg'
import {ReactComponent as UtilitiesIcon} from '../Icons/Utilities.svg'

export default function CompanyProfile() {

	return (
		<div className="company-profile">
            <div className="company-details">
                <div className="company-details-details">                            
                    <img src={Icon} alt="company icon"/>
                    <div>
                        <p className="company-name">Pinterest</p>
                        <div className="company-description">
                            <p>Pinterest is a social bookmarking site where users collect and share photos of their favorite events, interests and hobbies. One of the fastest growing social networks online, Pinterest is the third-largest such network behind only Facebook and Twitter.</p>
                        </div>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><LinkIcon /><p>pinterest.com</p></a>
                    </div>
                </div>
            </div>
            <div>
            <CategoryDropDown category="Application and Data" num={21}>
                <AppDataIcon />
            </CategoryDropDown>
                <CategoryDropDown category="Utilities" num={21} >
                <UtilitiesIcon />
            </CategoryDropDown>            
            <CategoryDropDown category="DevOps" num={21} >
                <DevOpsIcon />
            </CategoryDropDown>
            <CategoryDropDown category="Business Tools" num={21} >
                <BusinessToolsIcon />
            </CategoryDropDown>
            </div>
		</div>
	)
}
