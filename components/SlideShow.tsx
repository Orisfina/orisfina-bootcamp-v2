import right from '../public/images/slideshow-new-image.png'
import Button from './Button';
import Image from 'next/image'

const SlideShow = () => {
  return (
    <section className='slideshow-main container flex a-i-center'>
         <div className="grid23">
              <div className="text">
                   <h1 className="slideshow__title">
                   Become a <span className="secondary-color">Web Developer</span> or <span className="secondary-color">Graphic Designer</span> in 12 weeks. 
                   </h1>
                   <p className="slideshow__desc">
                   
                   Orisfina Computer Institute gives you the most efficient and supportive way for you to learn in-demand I.T skills, get hired, and advance your career. Join thousands of others in starting a career Now!</p>
                   <div className='flex slideshow_btn'>
                   <Button link='/register' cName='btn_register rounded-btn'>Register Now</Button>
                   </div>
              </div>
              <div className="right">
                    {/* <Image 
                         src={right} alt="orisfina computer institute students smiling" className="slideshow__right hide-on-desktop" />  */}
              </div>
              
         </div>
    </section>
)
}

export default SlideShow
