import { useEffect, useState  } from "react"

const InfiniteScrolling = () => {

    const [data,setData] = useState([])
    const [page,setPage] = useState(1)

    const handleScroll = () => {
        console.log(window.innerHeight)
        console.log(document.documentElement.scrollHeight)
        console.log(document.documentElement.scrollTop)

        if(window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight){
            console.log("Reached Rock Bottom")
            setPage(prev => prev+1)
        }

    }

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
        .then((res) =>  res.json())
        .then((result) => {
            console.log(result)
            setData([...data,...result])
        })

    },[page])

    useEffect(() =>{
        window.addEventListener("scroll",handleScroll)
        return () => window.removeEventListener("scroll",handleScroll)
    },[])

    return (
        <div>
            {(data).map((x) => {
                return (
                    <div key={x?.id} style={{backgroundColor:"gray"}}>
                        <h1>{x.id} - {x.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default InfiniteScrolling