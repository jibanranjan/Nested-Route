
import './Login.css'
import React from 'react'

function Login() {
  return (
    <div className='maindiv'>
        <h2>Log-in form</h2>
        <div>
        <input type="text" placeholder='user name' />
        </div>
        <div>
        <input type="password" placeholder='password' />
        </div>
        <button>Log-in</button>
    </div>
  )
}

export default Login