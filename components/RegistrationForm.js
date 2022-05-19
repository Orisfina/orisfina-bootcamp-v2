import React from 'react'

export default function RegistrationForm() {
  return (
    <>
    <form name='Registration-form' method='POST' action='/success' data-netlify="true">
              <input type="hidden" name="form-name" value="Registration-Form" />
                   <div className='form-group'>
                     <label className='form-label'> Email </label>
                     <input type='email' name='email' className='group-field' required />
                   </div>
                   <div className='form-group'>
                     <label className='form-label'> Fullnames </label>
                     <input type='text' name='fullnames' className='group-field' required />
                   </div>
                   <div className='form-group'>
                     <label className='form-label'> Phone </label>
                     <input type='tel' name='phone' className='group-field' required />
                   </div>
                   <div className='form-group'>
                          <label className='form-label'> Sex:</label>
                          <label htmlFor="male">Male</label> 
                          <input type="radio" id="male" name="sex" value="Male" />
                          <label htmlFor="css" className='ml-s'>Female</label>
                          <input type="radio" id="female" name="sex" value='Female' />   
                   </div>
                   <div className='form-group'>
                        <label className='form-label' htmlFor='courses'>Select Course:</label>
                          <select name="courses" id="courses">
                          <option value="Frontend Web Development">Frontend Web Development</option>
                          <option value="Backend Web Development">Backend Web Development</option>
                          <option value="Graphics Design">Graphics Design</option>
                          <option value="Application Package">Application Package</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="Mobile App Development">Hardware Engineering</option>
                          </select>
                   </div>
                   <div className='form-group'>
                        <input type='submit' className='btn btn_signup mt-m' value='Sign Up' />
                   </div>
              </form>
    </>
  )
}
