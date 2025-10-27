import React from "react";
import ReactDOM from "react-dom/client"; 
import ChartWidget from "./ChartWidget";
import "../index.css"
import StatsCard from "./StatsCard";
import { useState } from "react";
import Debouncing from "./Debouncing";
import Throttling from "./Throttling";
import InfiniteScrolling from "./infiniteScrolling";

const App = () =>{

    const [widgets,setWidgets] = useState([{ type: "StatsCard" }, { type: "ChartWidget" }]);

    function addWidget () {
        var newObj = { type: "StatsCard" };
        setWidgets(prevWidgets => [...prevWidgets, newObj]);
    }

    return(
      <InfiniteScrolling/>
    )

    return( 
        <div className="App"> 
        <button id="addButton" onClick={addWidget}> 
          Add Widget 
        </button>
        { 
          widgets.map((res,index) => ( 
            (res.type == "StatsCard") ? <StatsCard key={index}/> : <ChartWidget key={index}/>
          ))
        }
      </div>
    )

} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);