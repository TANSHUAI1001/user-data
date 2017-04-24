import React,{PropTypes} from "react"
import Style from 'css/header.css'

const NavBar = ({content}) => (
    <div className="nav-wrapper">
        <ul className="nav-bar">
            {
                content.map(
                    (item,i) => (<li className="current" key={i}><a href={"#"} >
                        <div className={item.icon}></div><div className="bar-title"><span>{item.text}</span></div>
                        </a></li>)
                )
            }
        </ul>
    </div>
)

export default NavBar