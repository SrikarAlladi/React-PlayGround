const Debouncing = () => {

    const funcCall = (() => {
        let timer;
        return (e) => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            console.log("Function Called", e.target.value);
          }, 500);
        };
    })();
    

    return(
        <div>
            <input id="deBounceInput" onKeyUp={(e) => funcCall(e)}>
            </input>
        </div>
    )

}

export default Debouncing;