import React from 'react'

import { increment,decrement } from '../../redux/cart'
import { useDispatch,useSelector } from 'react-redux'


const AfterCart = () => {

  const count = useSelector((state)=> state.cart.cartCount)

  const dispatch = useDispatch()
  return (
    <div className='after-cart'>
        <button className='cart-counter-button'onClick={()=>dispatch(decrement())}>-</button>
        <div className='counter' style={{margin:'10px'}}> {count}</div>
        <button className='cart-counter-button' onClick={()=>dispatch(increment())}>+</button>



    </div>
  )
}



export default AfterCart