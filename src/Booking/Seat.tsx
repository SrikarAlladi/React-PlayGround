import React from "react";

import "./Booking.css";

export interface SeatProps {
    id: string,
    type : "booked" | "notbooked" |  "unavailable" ,
    clickEvent : React.MouseEventHandler<HTMLDivElement>,
    colour : string,
    price : number,
    display : "Y" | "N"
}


const Seat:React.FC<SeatProps> = (props:SeatProps) => {
    return (
        <div className={`seat ${props.type} ${props.display} `} onClick={props.clickEvent} id={props.id}> 
            {props.id}
        </div>    
    )
}

export default Seat;
