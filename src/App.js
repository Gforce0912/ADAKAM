import React from "react";
import Header from "./components/Header";
import ComfortMedContaner from "./components/ComfortMedContaner";
import FullCheckup from "./components/FullCheckup";
import Services from "./components/Services";


function App() {
  return (
    <div className="App">
      <div className="back-img"/>
      <Header/>
      <ComfortMedContaner/>
      <FullCheckup/>
      <Services/>
    </div>
  );
}

export default App;
