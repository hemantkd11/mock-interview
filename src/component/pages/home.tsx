import React from "react";
import { Link } from "react-router-dom";


const  listOfBnt = [{
    name:"Theory Questions",
    Onclick:"/theroy-question-ans-dsa",
    backgroud: { background: "skyblue" }
},{
    name:"Coding Questions",
    Onclick:"/cooding-questions-with-answers",
    backgroud: { background: "skyblue" }
},{
    name:"DSA Questions",
    Onclick:"/nodejs-notes",
    backgroud: { background: "skyblue" }
},{
    name:"Ruff Code test",
    Onclick:"/ruff-code",
    backgroud: { background: "skyblue" }
}]
export const Homepage = ()=>{
    return(

        <div>
            <div className="flexbox">
            <h2>Interview Theory And Coding Questions And Answer</h2>
            {listOfBnt? listOfBnt.map((item) => (
             
                <button  key={item.name} style={item.backgroud}><Link to={item.Onclick}>{item.name}</Link></button>
              
            )):<div> No Buttons</div>}
            </div>
        </div>
    )
}