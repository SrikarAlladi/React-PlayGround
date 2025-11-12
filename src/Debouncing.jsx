const Debouncing = () => {


    function debounce(fn,delay){
      let timer
      return (...args) => {
        clearTimeout(timer)
        
        timer = setTimeout(() => {
          func.apply(this,args)
        },delay)

      }
    }


    function func(e) {
      console.log(e.target.value)
    }
    
    return(
        <div>
            <input id="deBounceInput" onKeyUp={debounce((e) => func(e),2000)}>
            </input>
        </div>
    )

}

export default Debouncing;