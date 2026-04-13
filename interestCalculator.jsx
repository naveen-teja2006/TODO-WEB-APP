import { useState } from "react";

function InterestCalculator(){
     let [principal,setPrincipal] = useState("");
    let [time,setTime] = useState("");
    let [rate,setRate] = useState("");
    let [SI,setSI] = useState(0);
    // Calculation Of Simple Interest
    function calculateSI(){
    if(!principal ||  !time || !rate){
        alert("Invalid Input!");
        return;
    }
    else{
        let result = (Number(principal) * 
        Number(time) * Number(rate)) / 100;
        setSI(result);
    }
}
    function resetSI(){
        setSI(0);
    }
    return(
        <>
        <fieldset>
            <h1>Simple Interest Calculator</h1>
            <div className="interest_block">
                <h1>{SI}</h1>
            </div>
            <div className="showing_interest"></div>
             <input type = "number" placeholder="Enter Principal Amount"
             onChange={(e) => setPrincipal(e.target.value)}/><br />
             <input type = "number" placeholder="Enter The Time In Years"
             onChange={(e) => setTime(e.target.value)}/><br />
             <input type = "number" placeholder="Enter Rate Of Interest" 
             onChange={(e) => setRate(e.target.value)}/>
            <button onClick={calculateSI}>Calculate</button>
            <button onClick={resetSI}>Reset</button>
        </fieldset>
    </>
    )
}
export default InterestCalculator;

