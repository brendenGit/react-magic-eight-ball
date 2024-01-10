import React, { useState } from "react";
import data from "./data";
import "./Eightball.css";

const Eightball = () => {
    const [msg, setMsg] = useState('Think of a Question')
    const [color, setColor] = useState("black")
    const getRandom = (data) => {
        const randIdx = Math.floor(Math.random() * data.length);
        return data[randIdx];
    }

    const updateBall = () => {
        console.log('clicked');
        const value = getRandom(data);
        setColor(value.color);
        setMsg(value.msg);
    }

    return (
        <div className="Eightball" onClick={updateBall} style={{ backgroundColor: color }}>
            <p className="Eightball-message">{msg}</p>
        </div>
    );
}

export default Eightball;