import React from 'react'
import { useEffect, useState } from 'react';



const Clock = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setHours(now.getHours());
            setMinutes(now.getMinutes());
            setSeconds(now.getSeconds());
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


  return (
    <div className="counter-body">
      <h1>{String(hours).padStart(2,'0')}:{String(minutes).padStart(2,'0')}:{String(seconds).padStart(2,'0')}</h1>
    </div>
  )
}

export default Clock



// TODO: Implement Clock component logic.
//1. make sure the clock is in the centre of the page
//2. make sure the clock shows hours, minutes and seconds
//3. make sure the clock updates every second
//4. should start from current time (pc)
//5  format for digital values
//6. use code for modifying the time live.