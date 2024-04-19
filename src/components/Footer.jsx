import React from "react";
import Telegram from "../assets/telegram-color.svg";
import Whatsapp from "../assets/whatsapp-color.svg";

function Footer() {
    
    return (
        <div className="footer-app">
            <div className="footer-wrapp">
                <div className="footer-content">
                    <div className="footer-block1">
                        <p>Махачкала</p>
                        <h4>ул. Дахадаева, 128</h4>
                        <p>Без выходных</p>
                        <h4>С 08:00 до 20:00</h4>
                    </div>
                    <div className="footer-block2">
                        <p>Меню</p>
                        <div className="footer-a"><a href="#">Услуги</a></div>
                        <div className="footer-a"><a href="#">Врачи</a></div>
                        <div className="footer-a"><a href="#">Новости</a></div>
                    </div>
                    <div className="footer-block3">
                        <div className="footer-a"><a href="#">Лаборатория</a></div>
                        <div className="footer-a"><a href="#">О центре</a></div>
                        <div className="footer-a"><a href="#">Отзывы</a></div>
                    </div>
                    <div className="footer-block4">
                        <p>Для связи с нами</p>
                        <h4>+7 (8722) 77-77-76</h4>
                        <h4>+7 (999) 477-77-76</h4>
                        <h4>adakam.med@mail.ru</h4>
                    </div>
                </div>
                <div className="under-footer">
                    <div className="under-foot_block1">
                        <span>@ 2024 Adakam.</span><a href="#">Политика конфиденциальности</a>
                    </div>
                    <div className="under-foot_block2">
                        <a href=""><img src={Telegram} alt="" /></a>
                        <a href=""><img src={Whatsapp} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;