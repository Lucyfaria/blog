import React,{useState, useEffect} from "react";
import * as ReactDOM from "react-dom";

const Fahrzeugkategorie: React.FC = () => {

let [count,setCount] = useState(0);
    const iterate = () => {
        setCount(count++)
        console.log('hellow')
    }

    //Debugging 
    useEffect (() => {
        console.log(count);
    },[count])

    return (
    <div>

                            <div className ="row align-items-center">
                                <div className ="col">
                            <button onClick={iterate}>Buttoni</button>
                            </div>
                            <div className ="col">
                            <text>{count}</text>
                            </div>
                            <div className ="col">
                                <input type="radio" id="normal" name="drone"></input>
                                <label for="normal">&nbsp;Shop Fahrzeuge</label>
                            </div>
                            <div className ="col">
                                <input type="radio" id="import" name="drone"></input>
                                <label for="import">&nbsp;Import Fahrzeuge</label>
                            </div>
                            <div className ="col">
                                <input type="radio" id="quad_motorrad" name="drone"></input>
                                <label for="quad_motorrad">&nbsp;Motorräder | Fahrräder</label>
                            </div>
                            <div className ="col">
                                <input type="radio" id="heli" name="drone"></input>
                                <label for="heli">&nbsp;Helikopter | Flugzeuge | Boote </label>
                            </div>
                            </div>
                            </div>)};

function Car() {
    return <h2>Hi, I am a Car!</h2>;
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Fahrzeugkategorie />);