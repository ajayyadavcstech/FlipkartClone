import React from 'react'
import './Navbar.css'

const Navbar = ()=>{
    return (
        <div className='navbar'>
            <div className='nav-left'>
                <p>Flipkart</p>
                <input type="text" placeholder='search for product and more...' />
            </div>
            
            <div className="nav-right">
                <div className="item1">Name</div>
                <div className="item2">Become a seller</div>
                <div className="item3">More</div>
                <div className="item4">Cart</div>
            </div>
        </div>
    )
}
export default Navbar;

// 1. logo
// 2. input field
// 3. item1
// 4. item2
// 4. item3
// 4. item4