import React from 'react'
import './counter.css';
import { useCounter } from './../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const{state, increment, decrement, reset} = useCounter(50);

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />

            <button onClick={() => increment(5)} className="btn"> +1 </button>
            <button onClick={reset} className="btn"> Reset </button>
            <button onClick={() => decrement(5)} className="btn"> -1 </button>
        </>
    )
}

