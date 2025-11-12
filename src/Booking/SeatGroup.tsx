import React from "react";
import SeatRow from "./SeatRow";
import {SeatRowProps } from "./SeatRow";

import "./Booking.css";

export interface SeatGroupProps {
    Label : String,
    SeatRows : Array<SeatRowProps>
}

const SeatGroup:React.FC<SeatGroupProps> = (props:SeatGroupProps) => {
    return (
        <div className="seatGroup">
            <label>{props.Label}</label>
            <div>
                {(props.SeatRows).map((x,index ) => {
                    return( 
                        <SeatRow {...x} key={index} />
                    )
                }) }
            </div>
        </div>
    )
}

export default SeatGroup;