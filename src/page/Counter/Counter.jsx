import { useEffect, useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      clearTimeout(timer); // cleanup
    }
    
  }, [counter]); // <-- runs when counter changes

  return (
    <div className="counter-body">
      <h1>{counter}</h1>
      {/* <button>Start Counter</button> */}
    </div>
  );
};

export default Counter;
