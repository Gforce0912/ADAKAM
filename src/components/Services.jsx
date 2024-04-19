import React from "react";
import LongLinkButton from "./LongLinkButton";
import ArrowBlack from "../assets/arrow-black.svg";
import ArrowWhite from "../assets/arrow-white.svg";
import CardsServices from "./CardsServices";

function Services() {
    return (
        <div className="services">
            <div className="servicesWrapper">
            <div className="sevicesApp">
                <h1>Услуги</h1>
                <LongLinkButton 
                    spanValue="Показать все услуги"
                    class="vuewAllServices_btn vuewBtn longBtnHover" 
                    img={ArrowBlack}
                    img2={ArrowWhite}
                    longBtnLink="#1"
                    Linkclass="ServicesLink"
                />
            </div>
        </div>
            <div className="servicesCards">
                <div className="servicesCards_block1">
                    <CardsServices 
                        className="serCard1 Card"
                        class="serCards"
                        btnName="servicesCardsBtn btn1"
                        title="Консультация" 
                        li1="Рентген грудной клетки" 
                        li2="Рентген головы" 
                        li3="Рентген носовых пазух"
                    />
                    <CardsServices 
                        className="serCard2 Card"
                        class="serCards"
                        btnName="servicesCardsBtn btn2"
                        title="Лаборатория" 
                        li1="Биохимия" 
                        li2="ПЦР тесты" 
                        li3="Covid - 19"
                    />
                    <CardsServices 
                        className="serCard3 Card"
                        class="serCards"
                        btnName="servicesCardsBtn btn3"
                        title="МРТ и МСКТ" 
                        li1="МРТ всего тела" 
                        li2="МРТ головного мозга" 
                        li3="УЗИ сердца"
                    />
                </div>
                <div className="servicesCards_block2">
                    <CardsServices 
                        className="serCard4 CardBlock2"
                        class="serCardsBlock2"
                        btnName="servicesCardsBtn btn4"
                        title="УЗИ" 
                        li1="ТРУЗИ мочевого пузыря" 
                        li2="УЗИ органов брюшной полости" 
                        li3="МРТ малого таза"
                    />
                    <CardsServices 
                        className="serCard5 CardBlock2"
                        class="serCardsBlock2"
                        btnName="servicesCardsBtn btn5"
                        title="Невролог" 
                        li1="Блокада позвоночника" 
                        li2="Мануальная терапия" 
                        li3="Рефлексотерапия"
                    />
                </div>
            </div>
        </div>
    )
}

export default Services;