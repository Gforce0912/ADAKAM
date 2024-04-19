import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DoctorsCards from "./DoctorsCard";
import DoctorImg1 from "../assets/doctorsImg/doctor1.svg";
import DoctorImg2 from "../assets/doctorsImg/doctor2.svg";


function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="drSlide1">
            <DoctorsCards
            doctorImg={DoctorImg1}
            doctorCardTitle="Магомедова Патимат"
            specialDoctor="Хирург"
            className="doctor-cards dr1"
            classNameImg="doctor-cards_img"
            classNameTitle="doctor-cards_title"
            classNameParagraph="doctor-cards_p"
            />
        </div>
        <div className="drSlide2">
            <DoctorsCards
            doctorImg={DoctorImg2}
            doctorCardTitle="Ильясова Амина"
            specialDoctor="Стамотолог"
            className="doctor-cards dr2"
            classNameImg="doctor-cards_img"
            classNameTitle="doctor-cards_title"
            classNameParagraph="doctor-cards_p"
            />
        </div>
        <div className="drSlide1">
            <DoctorsCards
            doctorImg={DoctorImg1}
            doctorCardTitle="Магомедова Патимат"
            specialDoctor="Хирург"
            className="doctor-cards dr1"
            classNameImg="doctor-cards_img"
            classNameTitle="doctor-cards_title"
            classNameParagraph="doctor-cards_p"
            />
        </div>
        <div className="drSlide2">
            <DoctorsCards
            doctorImg={DoctorImg2}
            doctorCardTitle="Ильясова Амина"
            specialDoctor="Стамотолог"
            className="doctor-cards dr2"
            classNameImg="doctor-cards_img"
            classNameTitle="doctor-cards_title"
            classNameParagraph="doctor-cards_p"
            />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;