import type { NextPage } from 'next'
import blogImg from '../../public/images/how-to-start-freelancing-developer.jpg'
import blogImg2 from '../../public/images/portfolio-website-tips-freelance-developer.jpg'
import blogImg3 from '../../public/images/start-freelance-web-design-business.jpg'
import SlideshowShort from '../../components/SlideshowShort'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

 const index:NextPage = () => {
  return (
    <>
        <NavBar />
          <SlideshowShort title='BLOG'/> 
          <section className='container blog'>
          <h2 className="primary__text primary__text2 pb-l t-center"> Recent Blog Post</h2> 
          <div className='grid3 blog__grid3'>
               <div className='blog'>
                    <Image className='blog__img' src={blogImg2} alt='how to start freelancing' />
                    <h3 className='blog__title'>
                    Portfolio Website Tips for Freelance Developers
                    </h3>
                    <p className='blog__intro pb-s'>
                    How to build a winning Portfolio Website as a Freelance Developer. All you need to know.
                    </p>
                    <Link href='https://studywebdevelopment.com/portfolio-tips-freelance-developer.html' >
                      <a target='_blank' rel="noreferrer" className='btn blog_btn' >Read Article</a>
                    </Link>
                    
               </div>
               <div className='blog'>
                    <Image className='blog__img' src={blogImg} alt='how to start freelancing' />
                    <h3 className='blog__title'>
                         How to Start a Freelance 
                         Web Design Business
                    </h3>
                    <p className='blog__intro pb-s'>
                    Here&apos;s how to start a freelance web design business with no experience from home (or anywhere). A 4,300+ word article with actionable tips
                    </p>
                    <Link href='https://studywebdevelopment.com/start-freelance-web-design-business.html'>
                      <a className='btn blog_btn'  target='_blank' rel="noreferrer">Read Article</a> 
                    </Link>
                   
               </div>
               <div className='blog'>
                    <Image className='blog__img' src={blogImg3} alt='how to start freelancing' />
                    <h3 className='blog__title'>
                    How to Start Freelancing as a Web Developer in 2022
                    </h3>
                    <p className='blog__intro pb-s'>
                    A detailed guide on how to become a successful freelance web developer as a beginner in 2022 and beyond. All you need to know...
                    </p>
                    <Link href='https://studywebdevelopment.com/how-to-start-freelancing-as-developer.html'>
                      <a className='btn blog_btn'  target='_blank' rel="noreferrer">Read Article</a>
                    </Link>
                    
               </div>
          </div>
          </section>
          <Footer />
      </>
  )
}

export default index
