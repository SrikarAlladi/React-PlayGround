import React from "react";
import {SeatProps} from "./Seat";
import Seat from "./Seat";

import "./Booking.css";

export interface SeatRowProps {
    Label : string,
    seats : Array<SeatProps>
}

const SeatRow: React.FC<SeatRowProps>  = (props:SeatRowProps) => {
    return (
        <div className="seatRow">
            <label>{props.Label}</label>
            {(props.seats).map((x,index) => {
                return( 
                    <Seat {...x} key={index}/>
                )
            }) }
        </div>
    )
}

// SeatRow()

// <SeatRow />
export default SeatRow;