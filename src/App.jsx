import { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import LoginForm from './Login'
import Register from './Register'
import ProductItems from './ProductItems'
import ViewProducts from './ViewProducts'
import Cart from './Cart'

// import SingleProduct from './SingleProduct'
// import Cart from './Cart'
function App() {
   
  return(
    <>
     <Nav>
        <Link to={ProductItems} path='productitems'>Home</Link>
        <Link to={Register} path='register'>Register</Link>
        <Link to={LoginForm} path= 'loginform'>Login</Link>
      
    </Nav> 
    
    <BrowserRouter>
      <Routes>

        <Route path='cart' element={<Cart/>}>Cart</Route>
        <Route path='/' element={<ViewProducts/>}>View Products</Route>
        <Route path='register' element={<Register/>}>Register</Route>
        
        
      </Routes>
    </BrowserRouter>
    
      {/* <Nav/>
     <ProductItems/> 
    {/* <ViewProducts/>  */}
    
   
      
    
    

    
    </>
  )

}

//   const [product, setProduct] = useState([])

//     useEffect(() => {
//         const getAllItems = async () => {
//            try{
//             const response = await fetch('https://fakestoreapi.com/products')
//             const result = await response.json()
//             console.log(result)
//             setProduct(result)
//         } catch (err) {
//             console.error(err)
//         }
        
//         }
//        getAllItems() 
//     }, [])
// return(
//   <>
//   <Nav/>
//   {/* <LoginForm/> */}
//   <div className='base'>
     
//     <h1>Market Place</h1>
   
//     {!!product.length &&
//     product.map((product) => {
//       return (
//         <div className='items' key={product.id}>
//           <h3>{ product.title }</h3>
//           <p>{ product.description }</p>
//           <p>${ product.price }</p>
//           <img src={product.image}/>
//           </div>
//       )
//     }

//     )}
//    </div>
//   {/* <Register/> */}
 
//  </>
// )

export default App
