import React from "react";
import ArrowBlack from "../assets/arrow-black.svg";
import ArrowWhite from "../assets/arrow-white.svg";
import Telegram from "../assets/Telegram.svg";
import WhatsApp from "../assets/WhatsApp.svg";
import LongLinkButton from "./LongLinkButton";


function ComfortMedContaner() {
    return (
      <div className="ComfortMed-app">
        <div className="ComfortMedContaner-wrap"> 	
            <div className="ComfortMed-titles">
                <h1 className="comfort-med_block">Комфортная <br/> медицинская помощь<br/> рядом с вами</h1>
                <p>
                    Медицинский центр, специализируйшийся<br/>
                    на лабораторной диагностике и оказании всех<br/>
                    видов медицинских услуг в городе Махачкала.
                </p>
            </div>
            <div className="ComfortMed-Links">
                <div className="ComfortMed-buttonBlock">
                    <LongLinkButton spanValue="Выбрать врача" class="ComfortMed-buttonBlockWhite ComBtn" img={ArrowWhite} longBtnLink='#'/>
                    <LongLinkButton spanValue="Выбрать врача" class="ComfortMed-buttonBlockBlack ComBtn" img={ArrowWhite} longBtnLink='#'/>
                </div>
                <div className="ComfortMed-Social">
                    <a href="#" className="ComfortMed-Social_Teleg"><img src={Telegram} alt="Telegram" /></a>
                    <a href="#" className="ComfortMed-Social_WhatsApp"><img src={WhatsApp} alt="WhatsApp" /></a>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default ComfortMedContaner;