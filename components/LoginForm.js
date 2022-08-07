import React from 'react'

export default function LoginForm() {
  return (
    <>
       <form action="/dashboard" method="post" name="login-Form" autoComplete='off' data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="Registration-Form" />
                    <div className='form-group'>
                     <label htmlFor='email' className='form-label'> Email </label>
                     <input type='email' id='email' name='email' className='group-field' data-type="text"  required />
                   </div>
                   <div className='form-group'>
                     <label htmlFor='password' className='form-label'> Password </label>
                     <input type='password' id='password' name='password' className='group-field' data-type="text"  required />
                   </div>
                   <div className='form-group'>
                        <input type='submit' className='btn btn_signup mt-m' value='Sign Up' />
                   </div>
              </form>
    </>
  )
}
