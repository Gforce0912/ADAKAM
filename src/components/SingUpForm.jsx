import React from "react";

function SingUpForm() {
    return (
    <div className="SignWrap">
        <input type="text" placeholder="ФИО"/>
        <input type="tel" placeholder="Номер телефона"/>
        <a href="#"><button>Оставить заявку</button></a>
        <a href="#">Нажимая на кнопку, я соглашаюсь с <span style={{textDecoration: "underline"}}>политикой конфдиенциальности</span></a>
    </div>
    )
}

export default SingUpForm;