import accordianData from "./mockData/accordianData";
import ItemsList from "./ItemsList";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

// import Button from "./ReusableComponents/Button"

const Accordian = () => {

    const data = accordianData

    const [showData,setShowData] = useState()

    const updateClick  = (index) => {
        if(showData == index){
            setShowData(null)
        }else{
            setShowData(index)
        }
    }
 

    return (
        <div className="accordianMain">
            {(data).map((x,index) => {
                return (
                    <div key={x.id}>
                        <div className="accordian" onClick={() => {updateClick(index)}}>
                            <div className="title">
                                <h2>{x.title}</h2>
                            </div>
                            <div className="accIcon">
                                {(showData == index) ? <FaChevronDown/> : <FaChevronUp/>}      
                            </div>
                        </div>  
                        <ItemsList data={x.content} showData={showData == index}/>                  
                    </div>               
                )
            })}
            {/* <Button label={"Hello"} onClick={() => {console.log("Hello World")}} variant={"hello"} ></Button> */}
        </div>
    )

}

export default Accordian;