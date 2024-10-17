import React from "react";
import { Link } from "react-router-dom";

export const Homepage = ()=>{
    return(

        <div>
            <div className="flexbox">
            <h2>Interview Theory And Coding Questions And Answer</h2>
            <button style={{ background: "skyblue" }}><Link to='/theroy/react/js/html/cssy766i'>Theory Questions</Link></button>
            <button style={{ background: "skyblue" }}><Link to='/cooding-questions-with-answers'>Coding Questions</Link></button>
            </div>
        </div>
    )
}