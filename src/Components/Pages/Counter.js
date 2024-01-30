import React from "react";
import { increase, decrease,reset } from "../Redux/Actions/CounterAction";
import { useDispatch, useSelector } from "react-redux"; 


export const Counter = () => {
    const count = useSelector(state => state)
    const dispatch = useDispatch()
   
   


    return (
      <div>
        <h1>counter {count}</h1>
        <button onMouseMove={() => dispatch(increase(100))}>increase</button>
        <button onClick={() => dispatch(decrease(100))}>decrease</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    );
}