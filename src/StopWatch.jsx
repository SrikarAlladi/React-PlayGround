import { useRef, useState } from "react" 

const StopWatch = () => {

    const [time,setTime] = useState(null)

    const [now,setNow] =  useState(null)

    const timeRef = useRef(null)

    const handleStart = () => {
        setTime(Date.now())
        setNow(Date.now())
        
        timeRef.current =  setInterval(() => {
            setTime(Date.now())
        },10)
    }

    const handleStop = () => {
        clearInterval(timeRef.current)
    }

    const handleReset = () => { 
        clearInterval(timeRef.current)
        timeRef.current =  null
        setTime(null)
        setNow(null)
    }

    let timeDisplay = (time && now) ? ((time - now) / 1000).toFixed(2) : 0

    return (
        <div>
            <h1>STOP WATCH</h1>

            <h1>Time - {timeDisplay}</h1>

            <div>
                <button onClick={handleStart}>
                    Start
                </button>
                <button onClick={handleStop}>
                    Stop
                </button>
                <button onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>

    )

}

export default StopWatch