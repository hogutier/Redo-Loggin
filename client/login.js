import React from 'react'
import {connect} from 'react-redux'

const Login = (props) => {
  const {handleSubmit} = props

  return (
    <div className='h100 w100 flex column align-items-center justify-center'>
      <h1>Let's Loggin'!</h1>
      <div className='flex w50'>
        <img src='/loggin.png' />
        <form className='grow1' onSubmit={handleSubmit}>
          <div className='flex column'>
            <div className='flex column m1'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' className='input' />
            </div>
            <div className='flex column m1'>
              <label htmlFor='email'>Password</label>
              <input type='password' name='password' className='input' />
            </div>
            <div className='m1'>
              <button type='submit' className='btn bg-blue white p1 rounded'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // Hey, check it out! Because we pass the connected Login to a Route
  // (we do this in client/index.js), it receives the "route props"
  // (match, location, and history) as its "own props".
  const history = ownProps.history

  return {
    handleSubmit (evt) {
      evt.preventDefault()
      // your code here!
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
