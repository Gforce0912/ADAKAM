import React from "react";
import LinkButton from "./LinkButton";


function CardsServices(props) {
    return (
        <div className={props.className}>
            <div className={props.class}>
                <h1>{props.title}</h1>
                <LinkButton class={props.btnName} href='#' linkClass='servicesCardsLink'/>
            </div>
            <ul>
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
            </ul>
        </div>
    )
}

export default CardsServices;




