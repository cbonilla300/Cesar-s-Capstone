import { useEffect, useState } from "react"
import ProductItems from "./ProductItems"

const ViewAllProducts = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getAllData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                const result = await response.json()
                setProducts(result)
            } catch (err) {
                console.error(err)
            }
        }
        (getAllData())
    }, [])

    const sortByName = () => {
        setProducts([...products].sort((productA, productB) => {
            return productA.title > productB.title ? 1 : -1
        }))
    }

    const sortByPrice = () => {
        setProducts([...products].sort((productA, productB) => {
            return productA.price > productB.price ? 1: -1
        }))
    }

    const filterBYCategory = (category) => {
        setProducts([...products].filter((product) => {
            return product.category === category
        }))
    }

    const getSetOfCategoriesForAllProduccts = () => {
        const categories = new Set()
        products.forEach((product) => {
            categories.add(product.category)
        })
        return Array.from(categories);
    }
    const categories = getSetOfCategoriesForAllProduccts() || []

    return (
        <>
            <div className="sort">
                <button className="name" onClick={() => {sortByName()}}>Sort By Name</button>
                <button className="price" onClick={() => {sortByPrice()}}>Sort By Price</button>
                
                <select onChange={(e) => {filterBYCategory(e.target.value)}}>
                    {categories.length && categories.map((el, i) => {
                        return (
                            <option key={i} value={el}>{el}</option>
                        )
                    })}
                </select>
            </div>
            <div className="product-container">
                {products.map((el, i) => {
                    return (
                        <ProductItems key={i} product={el} />
                    )
                })}
            </div>
        </>
    )
}

// const SingleProduct = async  () => {
//     try{
//         const response = await fetch('https://fakestoreapi.com/products/1')
//         const result = await response.json()
//         console.log(result)
//         SingleProduct(result)
//     } catch (err) {
//         console.error(err)
//     }

// return (
//     <>
//     <div className='items' key={product.id}>
//       <h3>{ product.title }</h3>
//       <p>{ product.description }</p>
//       <p>${ product.price }</p>
//       <img src={product.image}/>
//       </div> 
//     </>
// )

// }


// const sortByPrice = () => {
//     const [products, setProducts] = [products]
//     setProducts([...products].sort((productA, productB) => {
//         return productA.price > productB.price ? 1 : -1
        
//     }))
//     sortByPrice()
// }



// const filterBYCategory = (category) => {
//     const [products, setProducts] = [products]
//     setProducts([...products].filter((product) => {
//         return product.title.includes('shirt')
//     }))
//     filterBYCategory()
// }


// const getSetOfCategoriesForAllProduccts = () => {
//     const categories = new Set()
//     products.forEach((product) => {
//         categories.add(product.category)
//     })
//     return categories
    
// }


// export default SingleProduct 

export default ViewAllProducts