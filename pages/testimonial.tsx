import type { NextPage } from 'next'
import Image from 'next/image'
import Button from '../components/Button'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import testimonialImg from '../public/images/betty.jpg'
import testimonialImg2 from '../public/images/testifier.jpg'

const Testimonial:NextPage = () => {
    return (
        <>
        <NavBar />
        {/* <SlideshowShort title='TESTIMONIAL'  color1=' READ WHAT PEOPLE ARE SAYING ABOUT US' /> 

        <main className='container mt-l mb-l'>
            <h2 className="primary__text primary__text2 pb-l t-center">No one does it better than us</h2>
            <p>
            Orisfina Bootcamp is one of the fastest growing bootcamp in Auchi, Edo State Nigeria which provides you with all the mentorship from our Tutors that will take you from a complete begineer to an Advanced level. 
            Since Orisfina Bootcamp started in 2019, we've consistently been regarded as one of the best coding bootcamps in Edo State by students and employers.
            </p>
            <p> 
            Here at Orisfina Bootcamp, our syllabus have ben structured to suit you no matter your current level (complete Novice or intermediate). Our Syllabus are purely 20% Theory and 80% Practical. We believe the goal of many coding bootcamp attendees is to transition into a career in web development. This is the reason why our Syllabus are tailored to helping you become one in just 12 Weeks
            </p>
        </main> */}
        <section className="testimonial t-center">
        <h2 className=" primary__text white-heading">
                Testimonial
            </h2>
            <div className="grid2 grid2__collapse">
            <div id="testimonial4 " className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
             <div className="carousel-inner" role="listbox">
                 <div className="carousel-item active">
                     <div className="testimonial4_slide grid1-2">
                         <Image src={testimonialImg } className="img-circle img-responsive" 
                         height='136px !important'
                         width='136px !important'
                         alt='testisfier' />
                         <div>
                         <p className='t-justify'>Joining Orisfina bootcamp was one of the best decisions i took. Their tutors are the best in town as they are always ready to explain in the most simplest  method. They are just so supportive. In less than 6 weeks i started building basic website. I recommend Orisfina bootcamp to anyone seeking to acquire a skill in web design</p>
                         <h4>Betty Yakubu</h4>
                         </div>
                         
                     </div>
                 </div>
             </div>
         </div>
         <div id="testimonial4 " className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="testimonial4_slide grid1-2">
                            <Image src={testimonialImg2 } className="img-circle img-responsive" 
                            height={136}
                            width={136}
                            alt='testisfier' />
                            <div>
                            <p className='t-justify'>No place like Orisfina Bootcamp. From the very first day i registered till date, i have never had a reason to regret my actions. Irrespective of my zero background in coding, I got tutored in such a way that i felt so so easy to grasp. Right now am creating Softwares i never dreamt of few months ago.</p>
                            <h4>Ani Hope</h4>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>
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

export default Testimonial
