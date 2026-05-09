import { useState } from "react";

const CounterFBC=(props)=>{
    console.log(props.role);
    console.log(props.fullDetails);


    let[count, setCount] = useState(0);

    return(
    <>
        <h3>Function Based Component</h3>
        <h4>props Data: {props.role},{props.fullDetails}</h4>
        <h1>Count: {count}</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increment</button>

        <button onClick={()=>{
            setCount(count-1)
        }}>Decrement</button>

        <button onClick={()=>{
            setCount(count=0)
        }}>Reset</button>

    </>
    )
}

export default CounterFBC;