import React from 'react'

export default function RegistrationForm() {
  return (
    <>
       <form action="/success" method="post" name="Registration-Form" autoComplete='off' data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="Registration-Form" />
                    <div className='form-group'>
                     <label htmlFor='fName' className='form-label'> First Name  </label>
                     <input type='text' id='fName' name='fName' className='group-field' data-type="text"  required />
                   </div>
                   <div className='form-group'>
                     <label htmlFor='lName' className='form-label'> Last Name </label>
                     <input type='text' id='lName' name='last-name' className='group-field' data-type="text"  required />
                   </div>
                   <div className='form-group'>
                     <label className='form-label' htmlFor='email' name='email'> Email </label>
                     <input type='email' name='email' className='group-field' placeholder="example@email.com" id='email' data-type="text"  required />
                   </div>
                   
                   <div className='form-group'>
                     <label className='form-label' htmlFor='phone'> Phone </label>
                     <input type='tel' name='phone' className='group-field' data-type="text"  required />
                   </div>
                   <div className='form-group'>
                          <label className='form-label' htmlFor='sex'> Sex:</label>
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
                          <option value="Full-stack Development">Full-Stack Development</option>
                          <option value="Graphics Design">Graphics Design</option>
                          <option value="Application Package">Application Package</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="Mobile App Development">Hardware Engineering</option>
                          </select>
                   </div>
                   <div className='form-group'>
                        <label className='form-label' htmlFor='courses'>Are you a Student?:</label>
                          <select name="student-status" id="student-status">
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </select>
                   </div>
                   <div className='form-group'>
                        <input type='submit' className='btn btn_signup mt-m' value='Sign Up' />
                   </div>
              </form>
    </>
  )
}
