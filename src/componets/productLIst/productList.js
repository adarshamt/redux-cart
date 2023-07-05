 import React, { useState } from 'react'
 import products from'../../api/products.json'
import AfterCart from './CartButtons/AfterCart'
import BeforeCart from './CartButtons/BeforeCart'
import { useSelector} from 'react-redux'
import "../productLIst/productList.css"


 const ProductList = () => {

  const {cartCount,cartList} = useSelector((state)=>state.cart)


// console.log(carCount,cartList, "cart count and list")

  // *************dont need this bcoz we use redux*********
  // const[count,setCount] = useState(0)

  // const addToCart =()=>{

  //   setCount(1)
  // }
  // console.log(count)
   return (
     <div className='mainContainer'>
       
       {products.map((item,key)=>(


        <div className='itmCOntainer' key={key}>

          <img src={item.image} alt='no image found' />
          <h2>{item.title}</h2>

          { cartCount>0 ? <AfterCart/> : <BeforeCart />}

         

          


          </div>

       )





       
        

          
        
       )}

      </div>
   )
 }
 
 export default ProductList