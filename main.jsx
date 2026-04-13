import React from "react";
import ReactDOM from 'react-dom/client';
import InterestCalculator from "./interestCalculator"; 
import "./interestCalculator.css";
let rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);
function Header(){
  return (
    <>
    <InterestCalculator />
    </>
  )
}
root.render(<Header/>);
