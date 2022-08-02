import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SlideshowShort from '../components/SlideshowShort'
import LoginForm from '../components/LoginForm'
import signup from '../public/images/signup.svg'

 const register:NextPage = () => {
  return (
    <>
    <Head>
            <title>login Portal | Orisfina Computer Instiute</title>
            <meta name="description" content="Join thousands of others in starting a career today with our up-to-date syllabus with 100% practical approach. Enrol now!" />
            <meta name="keywords" content="login for free web design training, free web design training, free web development training " />
          </Head>
    <NavBar />
    <SlideshowShort title='login Form' color1='KINDLY FILL THE FORM WITH THE APPROPRIATE DETAILS'/> 
    <main className='course-login grid21 container mb-l' >
         <div className='reg-image'>
           <Image src={signup} alt='Signup on Orisfina Bootcamp' width='' height='' />
         </div>
         <div className='reg-form'>
              <h2 className='course-header t-center mb-m'>Signup to Orisfina Bootcamp</h2>
              <LoginForm />
         </div>
    </main>
    <Footer />
 </>
  )
}

export default register
