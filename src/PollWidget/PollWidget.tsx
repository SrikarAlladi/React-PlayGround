
import React, { createContext, useState } from "react";
import { PollWidgetProps } from "./types";
import { pollData } from "./PollData";
import { PollDataProps } from "./types";
import PollOption from "./PollOption";
import Shimmer from "./Shimmer";
import { pollContextType } from "./types";

export const pollContext = createContext<pollContextType | null>(null);

const PollWidget:React.FC<PollWidgetProps> = (props:PollWidgetProps) => {

    const [data,setData] = useState<PollDataProps>(pollData);
    
    return (
        (data == null) ? (
            <Shimmer/>
        ):( 
            <fieldset className="poll-widget" id={props.pollId}>
                    <legend className="poll-title">
                        {props.title}
                    </legend>
                    <ul className="poll-group">
                        {(data?.options).map((option) => {
                            return(
                                <pollContext.Provider key={option?.id} value={{pollData: data, setData: setData}}>
                                    <PollOption {...option} /> 
                                </pollContext.Provider>
                            )
                        })}
                    </ul>
            </fieldset>
        ) 
    );
}

export default PollWidget;