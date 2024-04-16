import React from "react";

const LongLinkButton = (props) => {
    return(
        <button className={props.class}> 
            <a href={props.longBtnLink} className={props.Linkclass}>
                <span>{props.spanValue}</span>
                <img className="ComBtn-img" src={props.img} alt="" />
            </a>
        </button>
    )
}


export default LongLinkButton;