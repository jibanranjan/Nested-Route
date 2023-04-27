import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='mainDiv'>

        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/Support'>Support</Link>
            <Link to='/Product'>Product</Link>
            <Link to='/About'>About</Link>
            <Link to='/Technologies'>Technologies</Link>
        </div>

        {/* <div className='btn'>
            <button>Log-out</button>
        </div> */}


    </div>
  )
}

export default Nav