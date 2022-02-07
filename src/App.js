import './App.css';
import './butons.css';
import React, {useState} from "react";

function App() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(0);

  function allClear(){
    setNumber1("");
    setNumber2("");
    setCurrentOperation("");
    setResult("");
  }

  const deleteNumber = () => {
    if (currentOperation === "") {
      setNumber1(number1.toString().slice(0, -1));
    } else {
      setNumber2(number2.toString().slice(0, -1));
    }
  };

  function clickNumber(value){
    // puedo preguntar si existe un resultado previo
    if(currentOperation === ""){
      setNumber1(number1+ value)
    }else{
      setNumber2(number2 + value)
    }    
  }

  function clickOperation(value){
    setCurrentOperation(value)
  }

  function getResult(){
    switch (currentOperation){
      case "+":
        setResult(Number(number1) +  Number(number2))
        break
      case "-":
        setResult(Number(number1) -  Number(number2))
        break
      case "*":
        setResult(Number(number1) *  Number(number2))
        break
      case "/":
        setResult(Number(number1) / Number(number2))
        break

    }
  }

  return (
    <div className="App">
      <h1 className="title">My Calculator</h1>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{currentOperation ? number1 + currentOperation : ""}</div>
          <div className="current-operand">{result ? result : (!currentOperation ? number1 : number2)}</div>
        </div>
        <button onClick={allClear} className= "span-two">AC</button>
        <button onClick={deleteNumber}>DEL</button>
        <button onClick={()=>{clickOperation("/")}} className= "op">÷</button>
        <button onClick={()=>{clickNumber(7)}} className= "num">7</button>
        <button onClick={()=>{clickNumber(8)}} className= "num">8</button>
        <button onClick={()=>{clickNumber(9)}} className= "num">9</button>
        <button onClick={()=>{clickOperation("*")}} className= "op">*</button>
        <button onClick={()=>{clickNumber(4)}} className= "num">4</button>
        <button onClick={()=>{clickNumber(5)}} className= "num">5</button>
        <button onClick={()=>{clickNumber(6)}} className= "num">6</button>
        <button onClick={()=>{clickOperation("+")}} className= "op">+</button>
        <button onClick={()=>{clickNumber(1)}} className= "num">1</button>
        <button onClick={()=>{clickNumber(2)}} className= "num">2</button>
        <button onClick={()=>{clickNumber(3)}} className= "num">3</button>
        <button onClick={()=>{clickOperation("-")}} className= "op">-</button>
        <button  onClick={()=>{clickNumber(".")}} className= "num">.</button>
        <button onClick={()=>{clickNumber(0)}} className= "num">0</button>
        <button onClick={getResult} className= "span-two">=</button>
      </div>
      <p className= "firma" >By Alan Castro</p>     
    </div>
 
  );
}

export default App;
