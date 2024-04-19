import React from "react";
import SingUpForm from "./SingUpForm";

function SingUp() {
    return (
    <div className="SignUpWrap">
        <div className="singUpApp">
            <div className="SingUp">
                <h2><span style={{color: "black"}}>Запишись на онлайн<br/> консультацию,</span>чтобы<br/>
                мы помогли точней подобрать<br/> тебе специалиста</h2>
                <SingUpForm/>
                <p>Нажимая на кнопку, я соглашаюсь с <a href="#" style={{textDecoration: 'underline', color: "#000", fontSize: "17px"}}>политикой конфдиенциальности</a></p>
            </div>
            <div className="SingUpBack">
            </div>
        </div>
    </div>
    )
}

export default SingUp;