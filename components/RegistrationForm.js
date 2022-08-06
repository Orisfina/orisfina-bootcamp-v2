import React,{useState} from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';


export default function RegistrationForm() {

  const router = useRouter();
  const [RegistrationError, setRegistrationError] = useState("");

  const [credentials,setCredentials] = useState({
    address:undefined,
    firstname: undefined,
    lastname: undefined,
    email: undefined,
    password: undefined,
    phone: undefined,
    gender: undefined,
    laptopStatus:undefined,
    studentStatus:undefined,
    course:undefined
  });

  const handleChange = (e) =>{
    setCredentials(
      (prev)=>({
        ...prev, 
        [e.target.name]:e.target.value}
      )
    )
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      
      const response = await fetch("http://localhost:5000/api/student/register", {
        method:"POST",
        body:JSON.stringify(credentials),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
      if(data.status === 200 && data.success === true){
        return router.push('/success'); 
      }
     setRegistrationError("An Error Occured, Try Again!");
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
       <form onSubmit={handleSubmit} name="Registration-Form" autoComplete='off' data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="Registration-Form" />
                    <div className='form-group'>
                     <label htmlFor='firstname' className='form-label'> First Name  </label>
                     <input type='text' id='firstname' name='firstname' onChange={handleChange} className='group-field' data-type="text"  required />
                   </div>
                   <div className='form-group'>
                     <label htmlFor='lastname' className='form-label'> Last Name </label>
                     <input type='text' id='lastname' name='lastname' onChange={handleChange} className='group-field' data-type="text"  required />
                   </div>
                   <div className='form-group'>
                     <label className='form-label' htmlFor='email' name='email'> Email </label>
                     <input type='email' name='email' className='group-field' onChange={handleChange} placeholder="example@email.com" id='email' data-type="text"  required />
                   </div>

                   <div className='form-group'>
                     <label className='form-label' htmlFor='password' name='password'> Password </label>
                     <input type='password' name='password' className='group-field' onChange={handleChange} placeholder="enter your password..." id='password' data-type="text"  required />
                   </div>
                   
                   <div className='form-group'>
                     <label className='form-label' htmlFor='phone'> Phone </label>
                     <input type='number' id='phone' name='phone' className='group-field' data-type="number" onChange={handleChange} maxLength={12} minLength={0}  required />
                   </div>
                   <div className='form-group' id='gender' >
                          <label className='form-label' htmlFor='sex'> Sex: </label>
                          <label htmlFor="male">
                          <input 
                            type="radio" 
                            name="gender" 
                            value="Male"
                            checked={credentials.gender === 'Male'}
                            onChange={handleChange}
                          />
                            Male
                          </label> 
                          
                          <label htmlFor="css" className='ml-s'>
                            <input 
                              type="radio" 
                              name="gender" 
                              value='Female' 
                              checked={credentials.gender === 'Female'}
                              onChange={handleChange}
                            />  
                            Female
                          </label>
                           
                   </div>
                   <div className='form-group'>
                        <label className='form-label' htmlFor='courses'>Select Course:</label>
                          <select name="course" id="course" onChange={handleChange} required>
                          <option value="null" disabled>Select Course...</option>
                              <option value="Front-end Development" >Frontend Web Development</option>
                              <option value="Backend Development">Backend Web Development</option>
                              <option value="Full-Stack Enginneer">Full-Stack Development</option>
                              <option value="Graphic Design">Graphics Design</option>
                              <option value="Application Package">Application Package</option>
                              <option value="Mobile App Development">Mobile App Development</option>
                              <option value="Mobile App Development">Hardware Engineering</option>
                          </select>
                   </div>
                   <div className='form-group'>
                        <label className='form-label' htmlFor='studentStatus'>Are you a Student?:</label>
                          <select name="studentStatus" id="studentStatus" onChange={handleChange} required>
                          <option  disabled>Select...</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </select>
                   </div>
                   <div className='form-group'>
                        <label className='form-label' htmlFor='haveLaptop'>Do you have a Laptop or one you can lend?:</label>
                          <select name="laptopStatus" id="laptopStatus" onChange={handleChange} required>
                             <option  disabled>Select...</option>
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
