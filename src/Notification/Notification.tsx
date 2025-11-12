import React from "react";

export interface NotificationProps {
    title : string;
    description : string;
    type: "info" | "warning" | "error" | "success";
    duration : number; 
    position : "top-left" | "top-right" | "bottom-left" | "bottom-right";
}
 
const icons = { 
}

const Notification:React.FC<NotificationProps> = () => {
    return (
        <div className="notification">   
        </div>
    );
}

export default Notification;


/*
    Notification at different positons 
    At a position user can have multiple notifications
    Notifications should get vertically stacked
    Notification should disapper after duration
    support for different types of notifications ( info , success, error , warning)

*/