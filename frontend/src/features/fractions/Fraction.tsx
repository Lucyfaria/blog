import React, { useState } from "react";

function Fraction(props: any){
    console.log(props)
    const [name, setName] = useState(props.fraction.name)
    const nameElement = <h2 className='name text-start'>{props.fraction.name}</h2>;
    return(
        <div>
            {nameElement}
        </div>
    )
}

export default Fraction;