import React from 'react'
import "../CartButtons/CartButtons.css"
import { useDispatch } from 'react-redux'

import { addTOCart } from '../../redux/cart'

const BeforeCart = () => {

  const dispatch = useDispatch()

  return (
    <div className='before-cart'>
      <button className='add-cart-button' onClick={()=>dispatch(addTOCart())} >Add to cart</button>
    </div>
  )
}

export default BeforeCart