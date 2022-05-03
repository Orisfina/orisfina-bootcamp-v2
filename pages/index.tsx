import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ProjectBox from '../components/ProjectBox';
import online from '../public/images/online.svg';
import onsite from '../public/images/onsite.svg';
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

const Home: NextPage = () => {
  return (
  <>
    <Head>
      <title>Learn Web Development from Scratch with Orisfina | OCI</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Orisfina is a Bootcamp in Auchi with courses in web development, graphic design, and mobile app development designed to take you from scratch to professional" />
      <meta name="keywords" content="Orisfina, Orisfina computer institute, Auchi nigeria, Web development training, bootcamp in edo state, learn web development, learn graphic design, learn app development, coding school, web development school in nigeria, web design school, web development company, free web development training,computer training school in edo state, computer schools in Auchi Edo state, Edo State, learn how to create a website as a begineer, website design company in Auchi Edo State, top web design schools in Edo State Nigeria, web designers in Nigeria" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <div className="header">
          <SlideShow />
    </div>
    <main>
           {/* What we about Section */}
           <section className="light container why-section">
                <h2 className=' primary__text pb-m'>
                Why Orisfina Bootcamp is the <span className="block_on_desktop">
                    <span>best place</span> for you
               </span>
                </h2>
                <div className="grid2">
                     <div className="grid1-6">                 
                         <div className="icon">
                              <Image src={finance} alt="We Provide a helpful roadmap at orisfina bootcamp" className="primary-icon" />
                         </div>
                         <div className="text_section">
                              <h3 className="tertiary_text">
                                   We Provide a helpful roadmap
                              </h3>
                              <p>
                                   Like a career advisor, we guide you through each step. You’ll learn the right thing at the right time. Our Councillors are always available to get you track at all times
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
                                   Gain practical experience as you go by creating portfolio-worthy projects that will help you land your next job or execute your ideas
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
           <h2 className='primary__text primary__text2 pb-l t-center'>What you will be <span> building</span></h2>
           <ProjectBox  />
           </section>


          {/* Courses Offered*/}
           <section className="container bc-primary-color">
                <h2 className='primary__text primary__text2 t-center white' >Courses Offered</h2>
                <p className='tertiary-header t-center pb-l white'>Don&#39;t just watch, choose a skill for yourself</p>
                <div className="grid2">
                    <div className="text-section text-section__courses">
                         <div className="grid1-6 ">
                              <div>
                                   <i className="pb-s fas fa-laptop-code fa-2x icon-color"></i>
                              </div>
                              <div>
                              <h3 className="tertiary-header">
                                   Web Design (Frontend Development) 
                              </h3> 
                              <p className='t-left'>
                                   A front-end developer links together the world of design and technology, packaging up the utility of the back end in an inviting way for users to interact with. They take website design files and convert them into HTML, JavaScript (JS) and/or CSS code — the core elements of front-end development. 
                              </p>
                              <Button cName='btn blog_btn inline-block' link='/blog/frontend-web-development-career'>Read More</Button> 
                         </div>

                         </div>   
                    </div>

                    <div className="text-section text-section__courses">
                         <div className="grid1-6">
                              <div>
                                   <i className="pb-s fas fa-layer-group fa-2x icon-color"></i>
                              </div>
                         <div>
                              <h3 className="tertiary-header">
                                   Graphic Design
                              </h3>
                              <p className='t-left'>
                                   Master the fundamental skills needed to design visually appealing designs. In this course, you will be expose to Hands-on projects that will improve your portfolio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat asperiores accusantium laborum aperiam sit eum aspernatur reprehenderit similique vel dicta?
                              </p>
                              <Button cName='btn blog_btn inline-block' link='/graphicDesignCareer'>Read More</Button>
                         </div>    
                    </div>
               </div>  
                    <div className="text-section text-section__courses">
                         <div className="grid1-6">
                              <div>
                                   <i className="pb-s fas fa-search-dollar fa-2x  icon-color"></i>
                              </div>
                              <div>
                                   <h3 className="tertiary-header">
                                        Web Design (Backend Development)
                                   </h3>
                                   <p className='t-left'>
                                        A back-end developer is someone who builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist. 
                                   </p> 
                                   <Button cName='btn blog_btn inline-block' link='/blog/backend-web-development-career'>Read More</Button>
                              </div>
                         </div>   
                    </div>

                    <div className="text-section text-section__courses">
                         <div className="grid1-6">
                              <div>
                                   <i className=" pb-s fas fa-file-word fa-2x  icon-color" aria-hidden="true"></i>
                              </div>
                              <div>
                              <h3 className="tertiary-header">
                                   Application Packages
                              </h3> 
                              <p className='t-justify'>
                                   This course gives you all the training needed to increase your typing speed, create beautiful powerpoint slides and also perform calculations in Microsoft Excel. Our Syllabus is tailored to get you going irrespective of who you are.
                              </p>
                              <Button cName='btn blog_btn mt-m inline-block' link='/applicationPackage'>Read More</Button>
                              </div>
                         </div>
                    </div>
                  
               </div> 
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
                         <Button cName='btn btn__link__red flex mt-m'  link='/register'>Start Free Trial</Button>
                     </div>
                     <div className="flex col center hide-on-mobile ">
                         <div className='flex-end'>
                              <Image src={online} alt='Becoming a web developer has never been so easy in the past like this. Get all you need to know at Orisfina bootcamp and become a web developer easily' className='doKnowImg '/>
                         </div>
                         <div className='flex-end'>
                              <Image src={onsite} alt='Becoming a web developer has never been so easy in the past like this. Get all you need to know at Orisfina bootcamp and become a web developer easily' className='doKnowImg '/>
                    </div>
                     </div>
                     
               </div>
           </section>
          {/* Testimonial */}
           <Testimonial />
               
          
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
                    <Link href='https://studywebdevelopment.com/portfolio-tips-freelance-developer.html' >
                      <a className='btn blog_btn'  target='_blank' rel="noreferrer">Read Article</a>
                    </Link>
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
                    <Link href='https://studywebdevelopment.com/how-to-start-freelancing-as-developer.html' >
                      <a target='_blank' rel="noreferrer" className='btn blog_btn'>Read Article</a>
                    </Link>
               </div>
          </div>
          </section>
    </main>
    <Footer />
  </>
  )
}

export default Home
