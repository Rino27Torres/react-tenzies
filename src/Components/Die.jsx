import React from "react";
import Dot from "./Dot.jsx";

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
        borderRadius: '10px'
    }
    return (
        <div 
            style={styles}
            onClick={props.holdDice}
        >
            <Dot value={props.value} />
        </div>
    )
}