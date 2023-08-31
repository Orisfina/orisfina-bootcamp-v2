import Button from './Button'
import testimonialImg from '../public/images/betty.jpg'
import testimonialImg2 from '../public/images/testifier.jpg'
import Image from 'next/image'

const Testimonial = () => {
    return (
            <section className="testimonial t-center">
                <h2 className=" primary__text white-heading">
                    Testimonial
                </h2>
                <div className="grid2 grid2__collapse">
                    <div id="testimonial4 " className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">

                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="testimonial4_slide grid1-2">
                                    <Image src={testimonialImg} className="img-circle img-responsive" alt='testisfier' />
                                    <div>
                                        <p className='t-justify'>Joining Orisfina bootcamp was one of the best decisions I took. Their tutors are the best in town as they are always ready to explain in the most simplest  method. They are just so supportive. In less than 6 weeks I started building basic website. I recommend Orisfina bootcamp to anyone seeking to acquire the necessary skill required of a Software Developer</p>
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
                                    <Image src={testimonialImg2} className="img-circle img-responsive" alt='testisfier' />
                                    <div>
                                        <p className='t-justify'>No place like Orisfina Bootcamp. From the very first day i registered till date, I have never had a reason to regret my actions. Irrespective of my zero background in coding, I got tutored in such a way that i felt so so easy to grasp. Right now am creating Software Applications I never dreamt of few months ago.</p>
                                        <h4>Ani Hope</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   
    )
}

export default Testimonial