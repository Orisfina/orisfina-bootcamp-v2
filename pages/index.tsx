import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ProjectBox from '../components/ProjectBox';
import online from '../public/images/online.jpg';
import onsite from '../public/images/onsite.jpg';
import finance from '../public/images/finance.6ef17dc7.svg'
import location from '../public/images/location.5d74dd0a.svg'
import SlideShow from '../components/SlideShow';
import Button from '../components/Button';
import Testimonial from '../components/Testimonial';
import blogImg from '../public/images/how-to-start-freelancing-developer.jpg'
import blogImg2 from '../public/images/portfolio-website-tips-freelance-developer.jpg'
import blogImg3 from '../public/images/start-freelance-web-design-business.jpg'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';
import Courses from '../components/Courses';
import CTA from '../components/cta';

const Home: NextPage = () => {
     return (
          <>
               <Head>
                    <title>Become a Web Developer from Scratch with Orisfina Bootcamp</title>
                    <meta name="description" content="Acquire the skills needed to become a web developer irrespective of your background. We've got you covered! " />
                    <meta name="keywords" content="Orisfina, Orisfina computer institute, computer schools in Auchi , Web development training, bootcamp in edo state, learn web development, learn graphic design, learn app development, coding school, web development school in nigeria, web design school, web development company, free web development training,computer training school in edo state, computer schools in Auchi Edo state, Edo State, learn how to create a website as a begineer, website design company in Auchi Edo State, top web design schools in Edo State Nigeria, web designers in Nigeria, coding bootcamp in Nigeria" />

               </Head>

               <input type="hidden" name="form-name" value="Registration" />
               <NavBar />
               <div className="header">
                    <SlideShow />
               </div>
               <main>
                    {/* What we about Section */}
                    <section className="light container why-section">
                         <h2 className=' primary__text pb-m'>
                              Why Orisfina Bootcamp is the <span className="block_on_desktop">
                                   <span className='primary-color'>best place</span> for you
                              </span>
                         </h2>
                         <div className="grid2">
                              <div className="grid1-6">
                                   <div className="icon">
                                        <Image src={finance} alt="We Provide a helpful roadmap at orisfina bootcamp" className="primary-icon" />
                                   </div>
                                   <div className="text_section">
                                        <h3 className="tertiary_text">
                                             We Provide a helpful roadmap to get you started
                                        </h3>
                                        <p>
                                             Stop wasting time on endless tutorials.
                                             Like a career advisor, we guide you through each step. You’ll learn the right thing at the right time.
                                             Our step-by-step Career Paths give you an exact roadmap to go from any background to getting hired. No CS degree required.
                                        </p>
                                   </div>
                              </div>
                              <div className="grid1-6">
                                   <div className="icon">
                                        <Image src={location} alt="Gain practical experience as you go by creating portfolio-worthy projects that will help you land your next job or execute your ideas" className="primary-icon" />
                                   </div>
                                   <div className="text_section">
                                        <h3 className="tertiary_text">
                                             We Provide Practical Experience
                                        </h3>
                                        <p>
                                             The projects we&apos;ll help you build are professional, real-world apps that will make your portfolio stand out and impress potential employers or execute your ideas.
                                             Our projects are structured from beginners level with a step-by-step paths.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         {/* <div className='grid2'>
                    <Image src={best} className='best' alt="join one of the best coding bootcamp in Auchi"/>
                <p className='t-left'>
                    Orisfina Bootcamp is one of the fastest growing bootcamp in Auchi, Edo State Nigeria which provides you with all the mentorship from our Tutors that will take you from a complete begineer to an Advanced level. 
                    Since Orisfina Bootcamp started in 2019, we've consistently been regarded as one of the best coding bootcamps in Edo State by students and employers.  
                    <span> 
                      Here at Orisfina Bootcamp, our syllabus have ben structured to suit you no matter your current level (complete Novice or intermediate). Our Syllabus are purely 20% Theory and 80% Practical. We believe the goal of many coding bootcamp attendees is to transition into a career in web development. This is the reason why our Syllabus are tailored to helping you become one in just 12 Weeks
                    </span>
                </p>
              </div>  */}
                    </section>


                    {/* What you will be Building Section */}
                    <section className="light container clip-bg">
                         <h2 className='primary__text primary__text2 pb-l t-center'>What you will be <span className='primary-color'> building</span></h2>
                         <ProjectBox />
                    </section>


                    {/* Courses Offered*/}
                    <section className="container dark">
                         <h2 className='primary__text primary__text2 t-center ' >Courses Offered</h2>
                         <p className='tertiary-header t-center pb-l '>Don&#39;t just watch, choose a skill for yourself</p>
                         <Courses />
                    </section>
                    {/* Section Do you know */}
                    <section className="light container clip-bg">
                         <div className='grid2 grid1-on-tab'>
                              <div className="text-section a-item">
                                   <h2 className="primary__text primary__text2 pb-s">
                                        <span className='primary-color'> Distance</span> is no longer a barrier anymore
                                   </h2>
                                   <h3>We offer Online and Onsite Training just to suit your Schedule</h3>
                                   <p className='t-left pt-s'>
                                        The only difference between Online and Onsite Training is your Location. Both  options provides:
                                   </p>
                                   <ul>
                                        <li>
                                             <i className="fas fa-user-check mr-s"></i>
                                             <span>
                                                  Live, real-time instruction
                                             </span>
                                        </li>
                                        <li>
                                             <i className="fas fa-user-check mr-s"></i>
                                             Direct access to genuine human beings</li>
                                        <li><i className="fas fa-user-check  mr-s"></i>
                                             Career Support</li>
                                        <li><i className="fas fa-user-check  mr-s"></i>
                                             Scheduled lectures and projects</li>
                                        <li><i className="fas fa-user-check  mr-s"></i>
                                             Community Networking</li>
                                   </ul>
                                   <Button cName='btn btn__link__red flex mt-m' link='/register'>Start Free Trial</Button>
                              </div>
                              <div className="flex col center hide-on-mobile-flex ">
                                   <div className="minusRem">
                                        <Image src={online} alt='Becoming a web developer has never been so easy in the past like this. Get all you need to know at Orisfina bootcamp and become a web developer easily' className='doKnowImg ' />
                                   </div>



                                   <Image src={onsite} alt='Becoming a web developer has never been so easy in the past like this. Get all you need to know at Orisfina bootcamp and become a web developer easily' className='doKnowImg ' />

                              </div>

                         </div>
                    </section>
                    {/* Testimonial */}
                    <Testimonial />

                    <CTA />

                    {/* BLog */}
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
                                   <div className="margin-auto">
                                        <Link href='https://studywebdevelopment.com/portfolio-tips-freelance-developer.html' >
                                             <a className='btn blog_btn' target='_blank' rel="noreferrer">Read Article</a>
                                        </Link>
                                   </div>

                              </div>
                              <div className='blog'>
                                   <Image className='blog__img' src={blogImg} alt='how to start freelancing' />
                                   <h3 className='blog__title'>
                                        How to Start a Freelance
                                        Web Design Business
                                   </h3>
                                   <p className='blog__intro pb-s'>
                                        Here&#39;s how to start a freelance web design business with no experience from home (or anywhere). A 4,300+ word article with actionable tips
                                   </p>
                                   <div className="margin-auto">
                                        <Link href='https://studywebdevelopment.com/start-freelance-web-design-business.html'>
                                             <a className='btn blog_btn' target='_blank' rel="noreferrer">Read Article</a>
                                        </Link>
                                   </div>


                              </div>
                              <div className='blog'>
                                   <Image className='blog__img' src={blogImg3} alt='how to start freelancing' />
                                   <h3 className='blog__title'>
                                        How to Start Freelancing as a Web Developer in 2023
                                   </h3>
                                   <p className='blog__intro pb-s'>
                                        A detailed guide on how to become a successful freelance web developer as a beginner in 2023 and beyond. All you need to know...
                                   </p>
                                   <div className="margin-auto">
                                        <Link href='https://studywebdevelopment.com/how-to-start-freelancing-as-developer.html' >
                                             <a target='_blank' rel="noreferrer" className='btn blog_btn'>Read Article</a>
                                        </Link>
                                   </div>

                              </div>
                         </div>
                    </section>
               </main>
               <Footer />
          </>
     )
}

export default Home
