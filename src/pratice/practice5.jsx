import React, { useState } from "react";
import BoilingVerdict from "./practice4";
import TemperatureInput from "./practice6";

function Calculator(props){
    return(
        <div>
            <TemperatureInput scale="c"/>
            <TemperatureInput scale="f"/>
        </div>
    )
}
export default Calculator;