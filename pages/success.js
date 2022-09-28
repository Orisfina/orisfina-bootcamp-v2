import Button from '../components/Button'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Head from 'next/head'


const success = ({name = 'Joshua'}) => {
  return (
    <>
     <Head>
            <title>Registration Successful | Orisfina Computer Instiute</title>
            <meta name="description" content="Thank you for registering at Orisfina Computer Institute. Our team will get back to you" />
            <meta name="keywords" content="registration for free web design training, free web design training, free web development training " />
      </Head>
    <NavBar />
        <div className='container-large success'>
            <h2 className='primary-text t-center pb-s'>Registration Successful !</h2>
            <p className="t-center">
                Thank you so much <u>{name} </u> for taking out time to fill the form. We sincerely appreciate your desire to kickstart your career. Our Team will reach out to you regarding the next step of your Application.
                Feel free to contact us for further information / Clarification
            </p>
            <p className="t-center">Welcome to Orisfina Computer Institute.</p>
            <h4>We love you!</h4>
            <Button cName='btn blog_btn inline-block center' link='/'>Return Home</Button>
        </div>
        <Footer />
    </>
    
  )
}

export default success