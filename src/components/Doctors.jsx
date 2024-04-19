import React from "react";
import LongLinkButton from "./LongLinkButton";
import ArrowBlack from "../assets/arrow-black.svg";
import ArrowWhite from "../assets/arrow-white.svg";
import MultipleItems from "./Slider";


function Doctors() {
    
    return (
        <div className="doctorsApp">
            <div className="doctorsSlide">
                <div className="content_text">
                    <p>Врачи</p>
                    <h1>Давайте познакомимся с<br/> нашими врачами</h1>
                    <LongLinkButton 
                        spanValue="Показать всех врачей"
                        class="vuewAllServices_btn vuewAllServices_btnDr vuewBtn longBtnHover" 
                        img={ArrowBlack}
                        img2={ArrowWhite}
                        longBtnLink="#1"
                        Linkclass="ServicesLink longBtnLink"
                    />
                </div>
            </div>
            <div className="content-doctors">
                <MultipleItems/>
            </div>
        </div>
    )
}

export default Doctors;