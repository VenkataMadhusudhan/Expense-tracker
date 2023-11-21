import React from "react";
import ReactDOM from "react-dom";
import Body from "./Body.js";
const App=()=>{
    return(
            <div className="app">
                <Body/>
               
            </div>

    )
}


const r = ReactDOM.createRoot(document.getElementById("root"));

r.render(<App />);
