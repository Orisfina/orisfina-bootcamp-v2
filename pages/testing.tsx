import Update from '../components/Update'
import NavBar from '../components/NavBar'
import Head from 'next/head'
import Footer from '../components/Footer'


const dashboard = () => {
  return (
    <>
     <Head>
            <title>Registration Successful | Orisfina Computer Instiute</title>
            <meta name="description" content="Thank you for registering at Orisfina Computer Institute. Our team will get back to you" />
            <meta name="keywords" content="registration for free web design training, free web design training, free web development training " />
      </Head>
    <NavBar />
        <Update />

        <Footer />
    </>
    
  )
}

export default dashboard