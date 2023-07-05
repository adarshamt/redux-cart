 import React, { useState } from 'react'
 import products from'../../api/products.json'
import AfterCart from './CartButtons/AfterCart'
import BeforeCart from './CartButtons/BeforeCart'

import "../productLIst/productList.css"
 const ProductList = () => {


  const[count,setCount] = useState(0)

  const addToCart =()=>{

    setCount()
  }
   return (
     <div className='mainContainer'>
       
       {products.map((item,key)=>(


        <div className='itmCOntainer' key={key}>

          <img src={item.image} alt='no image found' />
          <h2>{item.title}</h2>

          <AfterCart/>
          <BeforeCart addToCart={addToCart} />

          


          </div>

       )





       
        

          
        
       )}

      </div>
   )
 }
 
 export default ProductList