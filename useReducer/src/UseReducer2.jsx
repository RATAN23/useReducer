import React from 'react'
import './App.css'
import { useReducer } from 'react';

const products = [
   { id : 1 , val : "Shirt"},
   { id : 2 , val : "pant" },
   { id : 3 , val : "Socks"},
   { id : 4 , val : "shoes" }
]

const UseReducerHook2 = () => {

 const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_item":
      return {
        ...state,
       cart : [...state.cart , action.payload]
      };
      break;

    case "Remove_item":
      return {
        ...state ,
        cart : state.cart.filter((item) => item.id !== action.payload.id)
      }; break;

    case "Clear":
      return {
        ...state,
        cart : []
      }; break;

    default:
      return state;
  }
 };

  const initialState =  {
    cart  : []
  };



 const [state , dispatch] = useReducer(cartReducer , initialState);

  return (
    <div className='h-screen flex flex-col justify-center'>
      <h1 className='text-5xl font-bol p-2 underline'>Cart</h1>
       <div className='h-1/4 border-4 border-white overflow-y-scroll scroll-mr-4'>
        <ul>
          {state.cart.map((item) => (
            <li key={item.id} className='flex justify-center items-center gap-3'>
              <span>{item.val}</span>
              <button 
                className='border-2 border-red-500 rounded-md p-2 m-2' 
                onClick={() => dispatch({ type: "Remove_item", payload: item })}
              >
                Remove item
              </button>
            </li>
          ))}
        </ul>
      </div>
        <hr className='m-2  bg-white'/>
        <h2 className='font-bold text-4xl p-2'>Products</h2>
      <div className='flex gap-3'>
         {products.map((item) => (
          <button className='border-2 border-white rounded-md p-2' key = {item.id}
           onClick={() => dispatch({type: "Add_item" , payload : item})}
          >{item.val}</button>
         ))}
      </div>
      <button className='p-2 mt-2 border-2 border-green-200 rounded-md' onClick={() => dispatch({type : "Clear"})}>Clear</button>
    </div>
  )
}

export default UseReducerHook2
