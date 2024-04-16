import React from "react";
import Header from "./components/Header";
import ComfortMedContaner from "./components/ComfortMedContaner";
import FullCheckup from "./components/FullCheckup";


function App() {
  return (
    <div className="App">
      <div className="back-img"/>
      <Header/>
      <ComfortMedContaner/>
      <FullCheckup/>
    </div>
  );
}

export default App;
