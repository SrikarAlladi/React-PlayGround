import React, { useRef } from "react";

const Throttling = () => {

    //   const lastRun = useRef(0);

  const handleChange = (() => {
    let lastRun = 0;

    return((e) => {
        let now = Date.now();

        if(now - lastRun > 1000){
            console.log("Throttle",now)
        }

        lastRun = now
    })

  })()

//   const handleChange = (e) => {
//     const now = Date.now();

//     if (now - lastRun.current >= 500) { // ⏱️ throttle interval
//       console.log("Function Called:", e.target.value);
//       lastRun.current = now;
//     }
//   };

  return (
    <div>
      <input
        type="text"
        onKeyUp={handleChange} 
      />
    </div>
  );
};

export default Throttling;
