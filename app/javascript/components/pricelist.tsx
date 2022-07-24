import * as React from "react";
import * as ReactDOM from "react-dom";

const Fahrzeugkategorie = (
                            <div className ="row align-items-center">
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
                            </div>);

ReactDOM.render(Fahrzeugkategorie, document.getElementById('Fahrzeugkategorie'));

const Upgrades = (`Turbo`);
ReactDOM.render(Upgrades, document.getElementById('Upgrades'))