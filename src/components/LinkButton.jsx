import React from "react";
import ArrowBlack from "../assets/arrow-black.svg";
import ArrowWhite from "../assets/arrow-white.svg";

const LinkButton = (props) => {
    return(
        <button className={props.class}>
            <a href="#" id="arrow">
                <img src={ArrowBlack} alt="" className="arrowBlackHover1 arrowBlackHover3"/>
                <img src={ArrowWhite} alt="" className="arrowWhiteHover1 arrowWhiteHover2"/>
            </a>
        </button>
    )
}


export default LinkButton;