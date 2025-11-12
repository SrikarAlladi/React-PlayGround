import { useState } from "react"

import "../index.css"

const Boxes = () => {


    const [flag,setFalg] = useState([false,false,false,false,false,false,false,false,false])

    return (
        <div
            style={{display: "grid",gridTemplateColumns:"repeat(3,100px)"}}
        >
            {flag.map((x,index) => {
                return (
                    <div key={index} className={x ? "activeBlock" : "passiveBlock"}>
                        {JSON.stringify(x)}
                    </div>
                )
            })}
        </div>
    )

}

export default Boxes