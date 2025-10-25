import React from 'react'
import { useEffect, useState } from 'react';



const Clock = () => { 
    // State variables to hold hours, minutes, and seconds. Each creates state variables
    // initialized to 0, and they each have their own setter functions.
    const [hours, setHours] = useState(0); //for managing the "hours" state
    const [minutes, setMinutes] = useState(0); // for managing the "minutes" state
    const [seconds, setSeconds] = useState(0); // for managing the "seconds" state

    // Effect hook to set up an interval that updates the time every second.
    // Runs when component mounts. Mounting means that the component is being 
    // added to the DOM.
    useEffect(() => {
                          // This special function executes another function at regular interval which
                          // is perfect for a clock. Here it is programmed to repeat every 1000 milliseconds.
        const interval = setInterval(() => {
            const now = new Date(); // We have used a built-in class Date(). 
            // So "now" holds the current date and time from the system clock.
            setHours(now.getHours()); 
            setMinutes(now.getMinutes());
            setSeconds(now.getSeconds());
        }, 1000);

        return () => clearInterval(interval);   // This is a cleanup function which pairs with the setInterval. It stops
        // the interval when the component unmounts.
        // Unmounting means that the component is being removed from the DOM. This happens when 
        // navigating away from "/clock" to "/ (Counter)".

    }, []);


  return (
    <div className="counter-body"> {/*renders time in HH:MM:SS format*/}
    {/* "padStart(2,'0')" ensures two-digit format. * The first field refers to the 
    length of the resulting string, while the second refers to the string or character
    to pad with. (In this case, '0'*/}
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