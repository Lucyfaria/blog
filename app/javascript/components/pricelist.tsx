import React,{useState} from "react";
import * as ReactDOM from "react-dom";

const Fahrzeugkategorie: React.FC = () => {
        
    
    const [count,setCount] = useState(0);
    const iterate = () => {
        setCount(5)
        console.log('hellow')
    }

    return (
    <React.Component>

                            <div className ="row align-items-center">
                                <div className ="col">
                            <button onClick={iterate}>Buttoni</button>
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
                            </React.Component>)};

ReactDOM.render(Fahrzeugkategorie, document.getElementById('Fahrzeugkategorie'));
<Fahrzeugkategorie/>
//TODO: read price from db. change price acc. to Fahrzeugkategorie: FC functional component
const Upgrades = (`Turbo`);
ReactDOM.render(Upgrades, document.getElementById('Upgrades'))