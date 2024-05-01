import React from "react";

const firstFace = <div className="first-face dice">
                    <span className="dot"> </span>
                  </div>
                
const secondFace = <div className="second-face dice">
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                  </div>
                
const thirdFace = <div className="third-face dice">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                
const fourthFace = <div className="fourth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                   </div>
                
const fifthFace = <div className="fifth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                
const sixthFace = <div className="fourth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>


export default function Dot(props) {
    const value = props.value
    const styleDot = value === 1 ? firstFace
    : value === 2 ? secondFace
    : value === 3 ? thirdFace
    : value === 4 ? fourthFace
    : value === 5 ? fifthFace
    : value === 6 ? sixthFace
    : ""
     
    return (
        <span>{styleDot}</span>
    )  
}