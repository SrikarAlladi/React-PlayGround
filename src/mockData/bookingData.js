const bookingData = [
    {
        Label : "Premium 250Rs",
        SeatRows : [
            {
                Label : "A",
                seats : [
                    {
                        id: "1",
                        type : "notbooked",
                        clickEvent : () => {
                            alert("Hello")
                        },
                        colour : "green",
                        price : "250",
                        display : "Y"
                    },{
                        id: "2",
                        type : "unavailable",
                        clickEvent : () => {
                            alert("Hello")
                        },
                        colour : "green",
                        price : "250",
                        display : "Y"
                    },{
                        id: "3",
                        type : "notbooked",
                        clickEvent : () => {
                            alert("Hello")
                        },
                        colour : "green",
                        price : "250",
                        display : "Y"
                    },{
                        id: "4",
                        type : "notbooked",
                        clickEvent : () => {
                            alert("Hello")
                        },
                        colour : "green",
                        price : "250",
                        display : "Y"
                    }
                ]
            },{
                Label : "B",
                seats : [
                    {
                        id: "1",
                        type : "notbooked",
                        clickEvent : () => {
                            alert("Hello")
                        },
                        colour : "green",
                        price : "250",
                        display : "N"
                    },{
                        id: "2",
                        type : "notbooked",
                        clickEvent : () => {
                            alert("Hello")
                        },
                        colour : "green",
                        price : "250",
                        display : "Y"
                    },{
                        id: "3",
                        type : "notbooked",
                        clickEvent : () => {
                            alert("Hello")
                        },
                        colour : "green",
                        price : "250",
                        display : "Y"
                    },{
                        id: "4",
                        type : "notbooked",
                        clickEvent : () => {
                            alert("Hello")
                        },
                        colour : "green",
                        price : "250",
                        display : "Y"
                    }
                ]
            }

        ]
    },{
        Label : "Silver 150Rs",
        SeatRows : [
            {
                Label : "A",
                seats : [
                    {
                        id: "1",
                        type : "notbooked",
                        clickEvent : () => {
                            alert("Hello")
                        },
                        colour : "green",
                        price : "150",
                        display : "Y"
                    },{
                        id: "2",
                        type : "booked",
                        clickEvent : () => {
                            alert("Hello")
                        },
                        colour : "green",
                        price : "150",
                        display : "Y"
                    }
                ]
            },{
                Label : "B",
                seats : [
                    {
                        id: "1",
                        type : "booked",
                        clickEvent : () => {
                            alert("Hello")
                        },
                        colour : "green",
                        price : "150",
                        display : "Y"
                    },{
                        id: "2",
                        type : "notbooked",
                        clickEvent : () => {
                            alert("Hello")
                        },
                        colour : "green",
                        price : "150",
                        display : "Y"
                    }
                ]
            }
        ]
    }   
];

export default bookingData;
