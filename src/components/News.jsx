import React from "react";
import LongLinkButton from "./LongLinkButton";
import ArrowBlack from "../assets/arrow-black.svg";
import ArrowWhite from "../assets/arrow-white.svg";
import NewsBlock from "./NewsBlock";
import News1 from "../assets/news1.png";
import News2 from "../assets/news2.png";
import News3 from "../assets/news3.png";

function News() {

  return (
    <div className="newsWrap">
        <div className="newsApp">
            <div className="newsHeader">
                <h2>Новости</h2>
                <LongLinkButton
                class = "newsBtn longBtnHover"
                longBtnLink = "#"
                spanValue = "Показать все новости"
                Linkclass = "longBtnLink"
                img = {ArrowBlack}
                img2={ArrowWhite}
                />
            </div>
            <div className="news">
              <div className="mainNews">
                  <p className="newsDate">16.12.2033</p>
                  <h3 className="newsTitle">Новая услуга в отделении<br/> пластической хирургии<br/> ринопластика</h3>
              </div>
              <div className="otherNews">
                <NewsBlock 
                newsBlockTitle = "Выездная бригада кардиологов из НЦ СХХ им. Бакулева в Махачкале"  
                newsBlockDate = "16.12.2033"
                newsBlockImg = {News1}
                />
                <NewsBlock 
                newsBlockTitle = "Выездная бригада кардиологов из НЦ СХХ им. Бакулева в Махачкале"  
                newsBlockDate = "16.12.2033"
                newsBlockImg = {News2}
                />
                <NewsBlock 
                newsBlockTitle = "Выездная бригада кардиологов из НЦ СХХ им. Бакулева в Махачкале"  
                newsBlockDate = "16.12.2033"
                newsBlockImg = {News3}
                />
              </div>
            </div>
        </div>
    </div>
  );
}

export default News;