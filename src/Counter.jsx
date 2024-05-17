import {useState} from "react";

function Counter(){
    let [count, setCount] = useState(0);

    let increment = () => {setCount(count + 1)}

    let decrement = () => {setCount(count - 1)}

    return(
        <>
        <h1>Counter Application</h1>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Inc.</button>
        <button onClick={decrement}>Dec.</button>
        </>
    );
    };

    export default Counter;