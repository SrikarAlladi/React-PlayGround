import { useEffect, useState } from "react";
import "./SearchBar.css"

const SearchBar = () => {

    const [results,setResults] = useState([]);
    const [input,setInput] = useState("");

    const [showResults,setShowResults] = useState(false);

    const fetchData = async() => {
        console.log("API Called",input);
        try{
            const response = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
            const dataJson = await response.json(); 
            setResults(dataJson?.recipes);
        }catch(error){
            console.log(error);
        }   
    }

    useEffect(() =>{ 
        const timer  = setTimeout(fetchData,300);
        return () => {
            clearTimeout(timer);
        }
    },[input])

    const onInputChange = (e) => {
        setInput(e.target.value);
    }
     
    return(
        <div>
            <input className="input-search"
                type="text"
                placeholder="Search Here"
                value={input}
                onChange={(e) => onInputChange(e)}
                onFocus={() => setShowResults(true)}
                onBlur={() => setShowResults(false)}
            >
            </input>
            {showResults && <div className="recipe-list">
                {(results).map((x) => {
                    return(
                        <div className="recipe" key={x?.id}> {x?.name} </div>
                    )
                }) }
            </div>}
        </div>
    )
}

export default SearchBar;