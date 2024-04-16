import React from "react";
import FullCheckBack from "../assets/Охранная зона картинки.svg";
import SaleIcon from "../assets/Доп инфа.svg";
import LinkButton from "./LinkButton";

function FullCheckup() {
    return (
        <div className="FullCheckup-wrap">
            <div className="FullCheck-App">
                <div className="Discount">
                    <div className="Discount-sed">
                        <h1>Скидка на седацию<br/>
                            при гастро<br/>
                            и колоноскопии
                        </h1>
                        <p>
                            Если процедура пугает, сделайте её с седацией.<br/>
                            В феврале на неё действует скидка 50%   
                        </p>
                        <LinkButton class='Discount_btn' href='#' linkClass='Discount_btnLink'/>
                    </div>
                    <img className="FullCheckSaleIcon" src={SaleIcon} alt="" />
                    <img className="FullCheckBack"src={FullCheckBack} alt="" />
                </div>
                <div className="full_check">
                    <div className="gradient"></div>
                    <h1>Полный чекап организма
                    </h1>
                    <p>
                        Если процедура пугает, сделайте её с седацией.<br/>
                        В феврале на неё действует скидка 50%   
                    </p> 
                    <LinkButton class='Discount_btn2' href='#' linkClass='Discount_btn2Link'/>
                </div>
            </div>
        </div>
    );
  }
  
  export default FullCheckup;