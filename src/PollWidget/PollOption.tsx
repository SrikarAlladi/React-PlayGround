import React, { useContext } from "react";

import { Option } from "./types";

import { pollContext } from "./PollWidget";

const PollOption:React.FC<Option> = ({ id,title,votes}) => {

    const context = useContext(pollContext);

    if(!context){
        return null;
    }
    const {pollData,setData} = context;

    const handleSelect = (optionId:string) => {
        if(!pollData || !setData){
            return;
        }

        let updatedOptions = pollData.options.map((option) => {
            if(option.id === optionId){
                if(localStorage.getItem(optionId) === "voted"){
                    localStorage.removeItem(optionId);
                    return {...option, votes: option.votes - 1};
                } else {
                    localStorage.setItem(optionId, "voted");
                    return {...option, votes: option.votes + 1};
                }
            }
            return option;
        });

        let updatedTotalVotes = updatedOptions.reduce((acc, option) => acc + option.votes, 0);

        setData({
            ...pollData,
            options: updatedOptions,
            totalVotes: updatedTotalVotes
        });
    }

    return ( 
        <li className="poll-option" id={id} key={title} >
            <label>
                <input
                    type={(pollData?.isMultiple) ? "checkbox" : "radio"}
                    value={title}
                    checked={localStorage.getItem(id)  === "voted"}
                    onChange={() => handleSelect(id)}
                />
                {title} ({votes} votes)
            </label>
        </li>
    )
}

export default PollOption;