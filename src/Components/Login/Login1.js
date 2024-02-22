import React from 'react'
import './Login1.css'
import  Usericon from'../Assets/person.png'
import Emailicon from '../Assets/email.png'
import Passwordicon from '../Assets/password.png'

function Login() {
  return (
    <div className='conatiner'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className='underline'>

        </div>
        <div className='inputs'>
        <div className='input'>
          <img src={Usericon} alt=""/>
          <input type="text" placeholder='Name'/>
        </div>

        <div className='input'>
          <img src={Emailicon} alt=""/>
          <input type="email" placeholder='Email Id'/>
        </div>

        <div className='input'>
          <img src={Passwordicon} alt=""/>
          <input type="password" placeholder="Password"/>
        </div>

        </div>
        <div className='forgot-password'>Lost Password?<span>Click Here!</span></div>

      

        <div className='submit-conatiner'>
          <div className='submit'>Sign Up</div>
        </div>


      </div>
    </div>
  )
}

export default Login