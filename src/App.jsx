import { useState, useEffect } from 'react'
import './App.css'
import Nav from './Nav'
import LoginForm from './Login'
// import Register from './Register'
// import ProductItem from './ProductItems'


function App() {
  
  const [product, setProduct] = useState([])

    useEffect(() => {
        const getAllItems = async () => {
           try{
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json()
            console.log(result)
            setProduct(result)
        } catch (err) {
            console.error(err)
        }
        
        }
       getAllItems() 
    }, [])
return(

  <>
  <Nav/>
  {/* <LoginForm/> */}
  <div className='base'>
     
    <h1>Market Place</h1>
   
    {!!product.length &&
    product.map((product) => {
      return (
        <div className='items' key={product.id}>
          <h3>{ product.title }</h3>
          <p>{ product.description }</p>
          <p>${ product.price }</p>
          <p>{ product.image }</p>
          </div>
      )
    }

    )}
   </div>
  {/* <Register/> */}
 
 </>
)
}



export default App
