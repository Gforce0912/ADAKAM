import React from "react";

function DoctorsCards(props) {
    return (
        <div className={props.className}>
            <img src={props.doctorImg} alt="" className={props.classNameImg}/>
            <h2 className={props.classNameTitle}>{props.doctorCardTitle}</h2>
            <p className={props.classNameParagraph}>{props.specialDoctor}</p>
        </div>
    )
}

export default DoctorsCards;