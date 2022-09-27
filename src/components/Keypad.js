// Code Keypad Component Here
import React from "react"

function Keypad (){
    function handleKeypad(event){
       return(
        console.log("Entering password...")
       )
    }
    return (
        <div>
           <input type="password" onChange={handleKeypad} />
        </div>
    )
}

export default Keypad;