import { useState, useEffect } from 'react'
import './App.css'
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
  <div>
    <h1>Market Place</h1>
    
    {!!product.length &&
    product.map(() => {
    
    }

    )}
   </div>
  {/* <Register/> */}
 
 </>
)
}



export default App
