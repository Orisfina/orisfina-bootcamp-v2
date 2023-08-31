import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SlideshowShort from '../components/SlideshowShort'
import CTA from '../components/CTA'


const About:NextPage = () => {
     return (
          <>
          <Head>
            <title>About Page | Orisfina Computer Instiute</title>
            <meta name="description" content="What you need to know about orisfina computer institute in Auchi, Edo State Nigeria" />
            <meta name="keywords" content="about orisfina computer institute, bootcamp in Auchi Edo state" />
          </Head>
          
        <NavBar />
        <SlideshowShort title='ABOUT US'  color1=' WHO WE' color2='ARE'/> 

        <main className='container mt-l mb-l'>
            <h2 className="primary__text primary__text2 pb-l t-center">About Orisfina Computer Institute</h2>
            <p>
            Orisfina Bootcamp is one of the fastest growing bootcamp in Auchi, Edo State Nigeria which provides you with all the mentorship from our Tutors that will take you from a complete begineer to an Advanced level. 
            Since Orisfina Bootcamp started in 2019, we&apos;ve consistently been regarded as one of the best coding bootcamps in Edo State by students and employers.
            </p>
            <p> 
            Here at Orisfina Bootcamp, our syllabus have ben structured to suit you no matter your current level (complete Novice or intermediate). Our Syllabus are purely 20% Theory and 80% Practical. We believe the goal of many coding bootcamp attendees is to transition into a career in web development. This is the reason why our Syllabus are tailored to helping you become one in just 12 Weeks
            </p>
        </main>
        
<CTA />
    <Footer />
          </>
     )
}

export default About
