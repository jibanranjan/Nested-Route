import React from 'react'
import './Technologies.css'
import { Link,Outlet } from 'react-router-dom'


function Technologies() {
  return (
    <div className='topdiv' >
         
         <div className='leftdiv'>
          <Link to="Html">Html</Link>
          <Link to="Css">Css</Link>
          <Link to="JavaScript">JavaScripct</Link>
          <Link to="React">React</Link>
            
         </div>

         <div className='rightdiv'>
            <Outlet />
         </div>



    </div>
  )
}

export default Technologies