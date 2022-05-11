import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SlideshowShort from '../components/SlideshowShort'
import signup from '../public/images/signup.svg'

 const register:NextPage = () => {
  return (
    <>
    <Head>
            <title>Registration Portal | Orisfina Computer Instiute</title>
            <meta name="description" content="Enrol now for the upcoming bootcamp training on web development, graphic design @ Orisfina computer institute" />
            <meta name="keywords" content="registration for free web design training" />
          </Head>
    <NavBar />
    <SlideshowShort title='Registration Form' color1='KINDLY FILL THE FORM WITH THE APPROPRIATE DETAILS'/> 
    <main className='course-registration grid21 container mb-l' >
         <div className='reg-image'>
           <Image src={signup} alt='Signup on Orisfina Bootcamp' width='' height='' />
         </div>
         <div className='reg-form'>
              <h2 className='course-header t-center mb-m'>Signup to Orisfina Bootcamp</h2>
              <form name='Registration' method='POST' action='/success' data-netlify="true">
              <input type="hidden" name="form-name" value="Registration Form" />
                   <div className='form-group'>
                     <label className='form-label'> Email </label>
                     <input type='text' name='email' className='group-field' required />
                   </div>
                   <div className='form-group'>
                     <label className='form-label'> Fullnames </label>
                     <input type='text' name='fullnames' className='group-field' required />
                   </div>
                   <div className='form-group'>
                     <label className='form-label'> Phone </label>
                     <input type='tel' name='tel' className='group-field' required />
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
         </div>
    </main>
    <Footer />
 </>
  )
}

export default register
