import React from 'react'
import { useEffect, useState } from 'react';



const Clock = () => { 
  const now = new Date(); // Create a new Date object to get the current date and time. This is technically called a "component function" named Clock.
    // State variables to hold hours, minutes, and seconds. Each creates state variables
    // initialized to 0, and they each have their own setter functions.
    const [hours, setHours] = useState(now.getHours()); //for managing the "hours" state
    const [minutes, setMinutes] = useState(now.getMinutes()); // for managing the "minutes" state
    const [seconds, setSeconds] = useState(now.getSeconds()); // for managing the "seconds" state

    // Effect hook to set up an interval that updates the time every second.
    // Runs when component mounts. Mounting means that the component is being 
    // added to the DOM.
    
    // Here we implement the logic of the setters to update the time correctly.
    useEffect(() => {
      // The setInterval function is built-in in JS. 
      // It takes two params. first is a function you want to call. 
      // second is the time interval in ms you want to wait before calling the function again.
      const interval = setInterval(() => {  
      setSeconds(prev => { // here, it calls the setter function for seconds.
        if (prev + 1 >= 60) {
          // reset seconds, increment minutes
          setMinutes(m => { // logic extends to minutes
            if (m + 1 >= 60) {
              // reset minutes, increment hours
              setHours(h => (h + 1 >= 24 ? 0 : h + 1)); // then hours....
              return 0;
            }
            return m + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval); // finally, we clear the interval on cleanup. this prevents memory leaks, which happens when intervals or timeouts are not cleared properly. 
                                          // for example, if the component unmounts (is removed from the DOM), 
                                          // the interval would still be running in the background if we didn't clear it. It is like 
                                          // turning off a timer when you no longer need it. If you don't turn it off, it keeps running. 
  }, []); // empty dependency array means this effect runs only once when the component mounts.

    // Here's the overall flow of the code: In the first render, we get the system's clock. Then on subsequent re-renders, which happen every 1000ms, 
    // we update the time based on our logic (ignoring the computer system's clock). React ignores the state updates if the values are the same, so it won't re-render unnecessarily. If it has
    // to re-render, it will do so from its internal slots, not from the system clock. The "slots" are where React holds the state of each component between 
    // renders.  


  return (
    <div className="counter-body"> {/*renders time in HH:MM:SS format*/}
    <h1 className="clock-text">
        {String(hours).padStart(2, '0')}:
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </h1>
    </div>
  );
};
export default Clock



// TODO: Implement Clock component logic.
//1. make sure the clock is in the centre of the page