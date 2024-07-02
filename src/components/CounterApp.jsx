import React from 'react';
import { useCounter } from '../hooks/useCounter';


export const CounterApp = () => {
    const { counter, increment, decrement, reset } = useCounter(0)

    return (
        <>
            <h1>CounterApp</h1>
            <h4>{counter}</h4>
            <button type="button" className="btn btn-primary" onClick={() => increment()}>+1</button>
            <button type="button" className="btn btn-danger" onClick={() => reset()}>Reset</button>
            <button type="button" className="btn btn-primary" onClick={() => decrement()}>-1</button>
        </>
    );
};