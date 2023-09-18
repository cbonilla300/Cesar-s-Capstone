import { FaTruckMoving } from 'react-icons/fa'
import { BrowserRouter, Routes} from 'react-router-dom'
const Nav = () => {
    return (
        <>
        <BrowserRouter>
            <Routes></Routes>
        </BrowserRouter>
        <div >
            <p className='icon'><FaTruckMoving/>Free shipping when spending $100</p>
        </div>

        <div className='search_box'>
            <input type='text'  placeholder='Enter Product Name'></input>
            <button>Search</button>
        </div>
        </>
    )
}

export default Nav;