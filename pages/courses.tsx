import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../components/Button'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SlideshowShort from '../components/SlideshowShort'
import CTA from '../components/CTA'


const courses: NextPage = () => {
     return (
          <>
               <Head>
                    <title>Our Course | Orisfina Computer Instiute</title>
                    <meta name="description" content="Enrol now in any of our courses fully designed by experts with a goal of getting you started with ease." />
                    <meta name="keywords" content="courses offered at orisfina computer institute, web development training at orisfina computer institute, graphic design training at orisfina computer institute, computer training at orisfina computer institute" />
               </Head>
               <NavBar />
               <SlideshowShort title='Our Courses' color1='ONLINE' color2='ONSITE' text1='AND' text2='TRAINING' />
               <main className='course-section container'>
                    <h3 className='pt-m pb-s'>UPCOMING SESSIONS</h3>
                    <p>January 29th, 2024 - <Link href='/register' ><a>Apply Now!</a></Link></p>
                    <p className='pb-s'>February 26th, 2024  - <Link href='/register' ><a>Apply Now!</a></Link></p>
                    <h2 className='t-center pb-s pt-m course_heading main-color'>
                         Orisfina Computer Institute Teaches the Most In-Demand I.T Skills
                    </h2>
                    <h3 className='course_sub-heading t-center'>Take a bold step now and Select a course</h3>
                    <section className='courses courses-section'>
                         <div className='course_box'>
                              <div className='icon-title flex'>
                                   <h2 className='course_title'>Web Design</h2>
                              </div>
                              <p className='mb-s'>
                                   You will learn the fundamentals of structuring a webpage layout using HTML5 and CSS3 so that you can create responsive and beautiful websites from scratch. This course will also teach you everything you need to know about Javascript and take you from Zero to Hero. Our Advanced class will cover technologies such as React, Sass, Bootstrap, Git and PHP for building full web applications.
                              </p>
                              <Button cName='btn blog_btn inline-block' link='/webDevelopment'>Know More</Button>
                         </div>
                         <div className='course_box'>
                              <div className='icon-title flex'>
                                   <h2 className='course_title'>Graphic Design</h2>
                              </div>
                              <p className='mb-s'>
                                   Master the fundamental skills needed to design visually appealing designs. In this course, you will be expose to Hands-on projects that will improve your portfolio and increase your chances of landing jobs offers after training. Other fundamentals such as Typography, color-theory, and positioning will be covered extensively.
                              </p>
                              <Button cName='btn blog_btn inline-block disabled hide' link='/graphicDesignCareer'>Coming Soon</Button>
                         </div>
                         <div className='course_box'>
                              <div className='icon-title flex'>
                                   <h2 className='course_title'>UI/UX Design</h2>
                              </div>
                              <p className='mb-s'>
                                   The UX designer’s job is to stand between all that code and the human beings that have to use it. This is because they care about human-centered design.
                                   The UX course is a 8-week (part-time) program that prepares you for entry-level work in the field of UX Design. In the UX design bootcamp, you’ll learn about research, prototyping, information architecture, and how to design websites and applications.
                              </p>
                              <Button cName='btn blog_btn inline-block disabled' link='/uIUXDesign'>Coming Soon</Button>
                         </div>
                         <div className='course_box'>
                              <div className='icon-title flex'>
                                   <h2 className='course_title'>Application Packages</h2>
                              </div>
                              <p className='mb-s'>
                                   Are you a complete begineer or do you desire to advance your knowledge about Microsoft packages (MS Word, MS Excel, MS Access or MS Publisher)?This course gives you all the training needed to increase your typing speed, create beautiful powerpoint slides and also perform calculations in Microsoft Excel. Our Syllabus is tailored to get you going irrespective of who you are.
                              </p>
                              <Button cName='btn blog_btn inline-block disabled hide' link='/applicationPackage'>Coming Soon</Button>
                         </div>
                         <div className='course_box'>
                              <div className='icon-title flex'>
                                   <h2 className='course_title'>Mobile App Development</h2>
                              </div>
                              <p className='mb-s'>
                                   Become a mobile app developer with proficiency in all aspects of mobile applications from design to building and publishing apps for iOS and Android using a variety of tools, such as React Native, Java, XCode, and Swift in our 12 weeks bootcamp training irrespective of our current background.
                              </p>
                              <Button cName='btn blog_btn inline-block disabled hide' link='/#'>Coming Soon</Button>
                         </div>
                         <div className='course_box'>
                              <div className='icon-title flex'>
                                   <h2 className='course_title'>Hardware Engineering</h2>
                              </div>
                              <p className='mb-s'>
                                   Acquire the skills needed to be a computer
                                   Engineer with out practical base Syllabus. You will learn everything needed to troubleshoot a system and understand all the various error codes. You will also learn how to identify various parts of a system, and its functions. What are you waiting for? Classes start soon
                              </p>
                              <Button cName='btn blog_btn inline-block disabled hide' link='/#'>Coming Soon</Button>
                         </div>
                    </section>
               </main>
           <CTA />
               <Footer />
          </>
     )
}

export default courses
