import React, { createContext, useContext, useReducer } from "react";
import ReactDOM from "react-dom/client"; 
import ChartWidget from "./ChartWidget";
import "../index.css"
import StatsCard from "./StatsCard";
import { useState } from "react";
import Debouncing from "./Debouncing";
import Throttling from "./Throttling";
import InfiniteScrolling from "./infiniteScrolling";
import Boxes from "./boxes";
import Custom from "./Custom";
import StopWatch from "./StopWatch";
import { Provider } from "react-redux";
import store, { increment } from "./store/store";
import { useDispatch } from "react-redux";
import { increment } from "./store/store";
import { useSelector } from "react-redux";
import Accordian from "./Accordian"; 
import SearchBar from "./SearchBar/SearchBar";

import TicTacToe from "./TicTacToe";

// import bookingData from "./mockData/bookingData.js";
import SeatGroup from "./Booking/SeatGroup";

import Notification from "./Notification/Notification.tsx";

import "./Booking/Booking.css"


import TheatreUi from "./Theatre/Theatre.tsx";
import {bookingData} from "./Theatre/mockData.ts"

import { pollData } from "./PollWidget/PollData.ts";
import PollWidget from "./PollWidget/PollWidget.tsx";

import NestedComments from "./NestedComments/NestedComments.tsx";
import { commentsData } from "./NestedComments/commentsData.ts";

import Pagination from "./Pagination/Pagination.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const Modify = () => {


  const dispatch = useDispatch();

  const incrementFunc = () => {
    dispatch(increment(1))
  }


  return (
    <>
        <button onClick={incrementFunc} style={{cursor: "pointer"}} >
            Increment Count
        </button>
    </>
  )

}

const Display = () => {

  const count = useSelector((state) => (state.count.count))
  
  return (
    <div>
      {count}
    </div>
  )

}

const App = () =>{


  const queryClient = new QueryClient()


  return (

    <QueryClientProvider client={queryClient} >
      <Pagination/>
    </QueryClientProvider>
  )

  return (
    <NestedComments 
      comments = {commentsData} 
    />
  )

  return (
    <PollWidget  pollId = {"1234Id"}
      title = {pollData.title}
      options = {pollData.options}
      isMultiple = {true}  
    />
  )

  return(
    <Notification />
  )

  return (
    <TheatreUi {...bookingData} />
  )

  console.log(bookingData);
  return (
    <div className="theatre">
      {(bookingData).map((x,index ) => {
        return (
          <SeatGroup {...x} key={index} />
        )
      })}
    </div>
  )


  return(
    <>
      <SearchBar/>
    </>
  )

  return(
    <> 
      <Provider store={store} >
        <Display/>
        <Modify/>
      </Provider> 
    </>
  )



    return(
      <StopWatch/>
    )

    const [widgets,setWidgets] = useState([{ type: "StatsCard" }, { type: "ChartWidget" }]);

    function addWidget () {
        var newObj = { type: "StatsCard" };
        setWidgets(prevWidgets => [...prevWidgets, newObj]);
    }

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