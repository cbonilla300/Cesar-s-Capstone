import { useState, useEffect } from 'react'
import { FaTruckMoving } from 'react-icons/fa'

// All Products
 
const ProductItems = () => {
const [products, setProducts] = useState([])

useEffect(() => {
    const getAllItems = async () => {
       try{
        const response = await fetch('https://fakestoreapi.com/products')
        const result = await response.json()
        console.log(result)
        setProducts(result)
    } catch (err) {
        console.error(err)
    }
    
    }
   getAllItems() 
}, [])

const AddItem = (product) => {
  let cart = localStorage.getItem('cart')
  cart = JSON.parse(cart) || {} 
  // dynamic property
  if (cart[product.id] ) {
    cart[product.id].quantity +=1
  }else {
    cart[product.id] = product
    cart[product.id].quantity = 1 
  }
  localStorage.setItem('cart', JSON.stringify(cart) )
}

// const RemoveItem = () => {
//   let cart = localStorage.removeItem('cart')
//   cart = JSON.parse(cart) || {}

//   if (cart) {
//     cart[product.id].quantity -=1
//   }else {
//     console.log('not removed')
//   }


// }

return(
<>

<div >
            <p className='icon'><FaTruckMoving/>Free shipping when spending $100</p>
        </div>

        <div className='search_box'>
            <input type='text'  placeholder='Enter Product Name'></input>
            <button>Search</button>
        </div>


 <div className='base'>
 
<h1>Market Place</h1>

 {!!products.length &&
products.map((product) => {
  return (
    <div className='items' key={product.id}>
      <button className='add' onClick={() => AddItem(product)} type='text' placeholder='Add item'>Add Item</button>
      {/* <button className='remove' onClick={() => RemoveItem(product)} type='text' placeholder='Remove item'>Remove Item</button> */}
      
      <h3>{ product.title }</h3>
      <div  className='description'>
      <p>{ product.description }</p>
      <p>${ product.price }</p>
      </div>
      <img src={product.image}/>
      
      </div>
  )
}

)}
</div>
</>
);




}
// Single product


export default ProductItems