import { useEffect, useState } from "react"
import { PAGE_SIZE } from "./constants"
import Product from "./Product";
import "./styles.css";

import { IoCaretForward,IoCaretBack } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";

const Pagination = () =>{


    const fetchData = async() => {
        try{
            console.log("Try")
            const result = await fetch("https://dummyjson.com/products?limit=500")
            const data = await result.json() 
            console.log(data?.products)
            return data?.products 
        }catch(err){ 
            throw new Error(err)
        }
    }   

    const {data:products,error,isLoading,isError} = useQuery({queryKey: ["products"],queryFn: fetchData,retry:3}) 

    const totalPages = products ? Math.ceil(products.length / PAGE_SIZE) : 0;

    const [currentPage,setCurrentPage] = useState(0)
    const [fromItem,setFromItem] = useState(0)
    const [toItem,setToItem] = useState(PAGE_SIZE)

    useEffect(() => {
        setFromItem(currentPage * PAGE_SIZE)
        setToItem((currentPage * PAGE_SIZE) + PAGE_SIZE )
    },[currentPage])

    const handleBack = () => {
        if(currentPage > 0){
            setCurrentPage(prev => prev-1)
        }
    }

    const handleForward = () => {
        if(currentPage < totalPages-1){
            setCurrentPage(prev => prev+1)
        }
    }

    console.log("isLoading",isLoading,isError,error)

    if (isLoading) return <h3>Loading...</h3>;
    if (isError) return <h3>Error: {error.message}</h3>;

    return( 
        <div className="main-div">
            <div className="products-div">
                {products.slice(fromItem,toItem).map((product) => <Product key={product?.id} product={product}  /> )}
            </div>
            <div className="pagination">
                    <button className="back-button" disabled={currentPage == 0} onClick={handleBack} >
                        <IoCaretBack/>
                    </button>
                    {[...Array(totalPages).keys()].map((x) => {
                        return(
                            <button className={`button ${currentPage == x ? "active" : ""}`} key={x} onClick={() => setCurrentPage(x)} > 
                                {x+1}
                            </button>
                        )
                    }) } 
                    <button className="forward-button" disabled={currentPage == totalPages-1} onClick={handleForward} >
                        <IoCaretForward/>
                    </button>
            </div>
        </div>
    )

}

export default Pagination