import type { NextPage } from 'next'
import React from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SlideshowShort from '../components/SlideshowShort'

const About:NextPage = () => {
     return (
          <>
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
        
    <div className="apply-now">
        <div className="z-indez-high">
            <h2>What are you still waiting for?</h2>
            <p>Application for our 12-weeks bootcamp for all courses starting April 4<sup>th </sup>is now open</p>
               <Button cName='btn blog_btn inline-block' link='/register'>Enroll Now</Button>
        </div>
        <div className="bg-overlay"></div>
    </div>
    <Footer />
          </>
     )
}

export default About
