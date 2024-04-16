import React from "react";
import ArrowBlack from "../assets/arrow-black.svg";
import ArrowWhite from "../assets/arrow-white.svg";
import Telegram from "../assets/Telegram.svg";
import WhatsApp from "../assets/WhatsApp.svg";

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
                    <button className="ComfortMed-buttonBlockWhite ComBtn">
                        <span>Выбрать врача</span>
                        <img className="ComBtn-img" src={ArrowBlack} alt="" />
                    </button>   
                    <button className="ComfortMed-buttonBlockBlack ComBtn"> 
                        <span>Выбрать услугу</span>
                        <img className="ComBtn-img" src={ArrowWhite} alt="" />
                    </button>
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