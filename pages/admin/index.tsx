import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SlideShow from '../../components/SlideShow';
import Button from '../../components/Button';
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar';
import LoginForm from '../../components/LoginForm';


const Home: NextPage = () => {
  return (
  <>
    <Head>
      <title>Admin - Login </title>
      <meta name="description" content="Admin Dashboard for Orisfina Computer Institute " />
      <meta name="keywords" content="Orisfina computer institute dashboard for Admins" />
    </Head>

    <NavBar />
    <main className='grid2'>
     <div>
          image
     </div>
          <LoginForm />
    </main>
    <Footer />
  </>
  )
}

export default Home
