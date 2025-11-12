import { useState, useEffect } from "react"

const useResponseData = () => {
    const [data,setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const url = "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10"

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async() => {
        try{
            const response = await fetch(url)
            console.log(response)
            const dataJson = await response.json()
            console.log(dataJson)
            setData(dataJson)
        }catch(error){
            console.log(error)
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {data , loading ,error} ;
}

export default useResponseData 