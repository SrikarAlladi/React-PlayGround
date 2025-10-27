export default function ChartWidget(){

    const chartsData = [{months : "Jan" , value : "4"},{months : "Feb" , value : "2"},{months : "Mar" , value : "5"} , {months : "Apr" , value : "4"} ]

    return (
        <div className="ChartWidget">
            <div className="title">
                <h4> {"Sales Chart (mock chart)"} </h4>
            </div>
            <div className="graphBlock">
                {
                    chartsData.map((res,index) => (
                        <div key={index}>
                            <div className="barGraph" style={{width : `${res.value + "rem"}`,height : "1rem",border: "black solid 1px",backgroundColor: "black", marginRight: "1.5rem" }}> </div>
                            <div>{res.months}</div>
                        </div>
                    ))
                }  
            </div>
        </div>
    )
}