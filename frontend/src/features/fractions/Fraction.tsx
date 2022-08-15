import React, { useState } from "react";

function Fraction(props:any){
    const [name, setName] = useState(props.fraction.name)
    const [primary, setPrimary] = useState(props.fraction.primary)
    const [secondary, setSecondary] = useState(props.fraction.secondary)
    const [pearl, setPearl] = useState(props.fraction.pearl)
    const [smoke, setSmoke] = useState(props.fraction.smoke)
    const [lights, setLights] = useState(props.fraction.lights)
    const [contract, setContract] = useState(props.fraction.contract)
    const [plate, setPlate] = useState(props.fraction.plate)
    const [updated_at, setUpdated_at] = useState(props.fraction.updated_at)
    return(

        <tr>
            
                    <td>{name}</td>
                    <td>{primary}</td>
                    <td>{secondary}</td>
                    <td>{pearl}</td>
                    <td>{smoke}</td>
                    <td>{lights}</td>
                    <td>{contract}</td>
                    <td>{plate}</td>
                    <td>{updated_at}</td>
                    <td>Bearbeiten</td>

            </tr>
    )
}

export default Fraction;