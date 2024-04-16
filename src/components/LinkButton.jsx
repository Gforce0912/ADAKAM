import React from "react";
import ArrowBlack from "../assets/arrow-black.svg";
import ArrowWhite from "../assets/arrow-white.svg";

const LinkButton = (props) => {
    return(
        <button className={props.class}>
            <a href="#">
                <img src={ArrowBlack} alt="" />
            </a>
        </button>
    )
}


export default LinkButton;