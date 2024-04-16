import React from "react";
import Logo from "../assets/logo.svg";
import Down from "../assets/chevron-down.svg";
import TellIcone from "../assets/tellIcon.svg";

function Header() {
  return (
    <header className="header"> 	
        <img src={Logo} alt="logo" className="header-logo"/>
        <nav>
            <div className="header_services">
                <a href="#">Услуги</a>	
                <img src={Down} alt="" />
            </div>
            <a href="#">Лабаратория</a>
            <a href="#">Врачи</a>
            <a href="#">О центре</a>
            <a href="#">Новости</a>
            <a href="#">Отзывы</a>
            <span>+7 (999) 477-77-76</span>
            <button className="call_btn">
                <a href="#">
                    <span>Записаться</span>
                    <img src={TellIcone} alt=""/>
                </a>
            </button>
        </nav>
    </header>
  );
}

export default Header;