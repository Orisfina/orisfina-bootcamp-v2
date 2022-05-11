import right from '../public/images/slideshow-new-image.png'
import Button from './Button';
import Image from 'next/image'

const SlideShow = () => {
  return (
    <section className='slideshow-main container flex a-i-center'>
         <div className="grid23">
              <div className="text">
                   <h1 className="slideshow__title">
                   Become a <span className="secondary-color">Web Developer</span> in 12 weeks. 
                   </h1>
                   <p className="slideshow__desc">
                   Join thousands of others in starting a career as a Web developer or graphic designer with our project-based learning system capable of taking you from a complete beginner to a Job ready Level.</p>
                   <div className='flex slideshow_btn'>
                   <Button link='/register' cName='btn_register rounded-btn'>Join Now</Button>
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
