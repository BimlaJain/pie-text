import React, { useState, useEffect } from 'react';

const Counting = () => {
    const [count, setCount] = useState(1);
    const [isCounting, setIsCounting] = useState(true);
    const numbers = [];
    for (let i = 9; i >= 0; i--) {
        numbers.push(i);
    }
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    useEffect(() => {
        if (count <= 99 && isCounting) {
            const timer = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000); 

            return () => clearInterval(timer); 
        } else {
            setIsCounting(false); 
        }
    }, [count, isCounting]); 

    return (
        <div className="text-center pt-4">
            <h2>FOR LOOP</h2>
            <h2>Counting 9-0:</h2>
            <ul className="list-unstyled">
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>

            <div>
                <h2>USEEFFECT and USESTATE</h2>
                <h2>Counter: {count}</h2>
                <button onClick={increment} className="p-2 border-black text-black rounded-3 me-3">Increment</button>
                <button onClick={decrement} className="p-2 border-black text-black rounded-3">Decrement</button>
            </div>
        </div>
    );
};

export default Counting;
