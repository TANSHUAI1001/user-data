import React,{PropTypes} from "react"
import Style from 'css/header.css'


const SiteNav = ({content}) => (
    <div className="siteNav-wrapper">
            <div className="left-side">
                <div className="logo"></div>
                <div className="seperate"></div>
                <div className="page-title">{content.pageTitle}</div>
            </div>
            <div className="right-side">
                <div className="account"><div className="account-icon"></div><div id="account-name">账户</div></div> 
                <div className="exit"><div className="exit-icon"></div><div id="exit-button">退</div></div>
            </div>
        </div>
)
 
export default SiteNav