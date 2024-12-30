import React, { useState, useEffect } from 'react';

const Counting = () => {
    // Initialize the count state to 1 for counting from 1-100
    const [count, setCount] = useState(1);
    const [isCounting, setIsCounting] = useState(true); // To control the counting process

    // For displaying the numbers from 9 to 0
    const numbers = [];
    for (let i = 9; i >= 0; i--) {
        numbers.push(i);
    }

    // Increment function
    const increment = () => setCount(count + 1);

    // Decrement function
    const decrement = () => setCount(count - 1);

    // Effect to handle counting from 1 to 100 with a 1 second interval
    useEffect(() => {
        if (count <= 100 && isCounting) {
            const timer = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000); // Set interval to update count every 1 second

            return () => clearInterval(timer); // Cleanup interval on component unmount
        } else {
            setIsCounting(false); // Stop counting once the count reaches 100
        }
    }, [count, isCounting]); // Runs on count and isCounting change

    return (
        <div className="text-center">
            <h1>Counting 9-0:</h1>
            <ul className="list-unstyled">
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>

            <div>
                <h2>Counter: {count}</h2>
                <button onClick={increment} className="btn btn-primary me-3">Increment</button>
                <button onClick={decrement} className="btn btn-danger">Decrement</button>
            </div>
        </div>
    );
};

export default Counting;
