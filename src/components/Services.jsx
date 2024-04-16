import React from "react";
import LongLinkButton from "./LongLinkButton";
import ArrowBlack from "../assets/arrow-black.svg";
import CardsServices from "./CardsServices";

function Services() {
    return (
        <div className="services">
            <div className="servicesWrapper">
            <div className="sevicesApp">
                <h1>Услуги</h1>
                <LongLinkButton 
                    spanValue="Показать все услуги"
                    class="vuewAllServices_btn vuewBtn" 
                    img={ArrowBlack}
                    longBtnLink="#1"
                    Linkclass="ServicesLink"
                />
            </div>
        </div>
            <div className="servicesCards">
                <div className="servicesCards_block1">
                    <CardsServices title="Консультация" li1="Рентген грудной клетки" li2="Рентген головы" li3="Рентген носовых пазух"/>
                    <CardsServices title="Лаборатория" li1="Биохимия" li2="ПЦР тесты" li3="Covid - 19"/>
                    <CardsServices title="МРТ и МСКТ" li1="МРТ всего тела" li2="МРТ головного мозга" li3="МРТ малого таза"/>
                </div>
                <div className="servicesCards_block2">
                    <CardsServices/>
                </div>
            </div>
        </div>
    )
}

export default Services;