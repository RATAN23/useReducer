import React from 'react'
import './App.css'
import { useReducer } from 'react';

const UseReducerHook = () => {
    const countReducer = (state, action) => {
        switch (action.type) {
          case "Increment":
            return {
              ...state,
              count : state.count + 1,
            };
            break;
          
          case "Decrement":
            return {
              ...state,
              count : state.count - 1,
            };
          break;
        
          default: return state;
        }
      }
    
       const initialCount = {
          count : 0
       }
    
       const [state , dispatch] = useReducer(countReducer , initialCount);

  return (
    <div className='flex flex-col'>
      <div>
        Count : {state.count}
        </div>
        <buttom className = 'cursor-pointer m-2 p-2 rounded-md border-2 border-white'
            onClick = {() => dispatch({type : "Increment"})} >
            Incremement
        </buttom>
        <buttom className = 'cursor-pointer m-2 p-2 rounded-md border-2 border-white'
            onClick = {() => dispatch({type : "Decrement"})} >
            Decrement
        </buttom>
      
    </div>
  )
}

export default UseReducerHook
