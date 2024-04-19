import React from "react";

const LongLinkButton = (props) => {
    return(
        <button className={props.class}> 
            <a href={props.longBtnLink} className={props.Linkclass}>
                <span>{props.spanValue}</span>
                <img className="ComBtn-img longImg1" src={props.img} alt="" />
                <img className="ComBtn-img longImg2" src={props.img2} alt="" />
            </a>
        </button>
    )
}


export default LongLinkButton;