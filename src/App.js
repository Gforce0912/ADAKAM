import React from "react";
import Header from "./components/Header";
import ComfortMedContaner from "./components/ComfortMedContaner";
import FullCheckup from "./components/FullCheckup";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Reviews from "./components/Reviews";
import News from "./components/News";
import SingUp from "./components/SingUp";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div className="back-img"/>
      <Header/>
      <ComfortMedContaner/>
      <FullCheckup/>
      <Services/>
      <Doctors/>
      <Reviews/>
      <News/>
      <SingUp/>
      <Footer/>
    </div>
  );
}

export default App;
