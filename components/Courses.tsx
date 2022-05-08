import Image from 'next/image'
import React from 'react'
import Button from './Button'
import style from '../styles/Courses.module.css'

export default function Courses() {
  return (
    <>
        <div className="grid3">
            <div className={style.course}>
                <Image
                    src='/images/web-development.jpg'
                    width={450}
                    height={300}
                    alt='Web development course'
                />
            <div className='center-btn high-Zindex'>

                <h2 className="tertiary-header t-center no-margin white">
                    Web Development 
                </h2>
                
                <Button cName='btn blog_btn inline-block no-margin' link='/webDevelopment'>Know More</Button>
            </div>
            <div className="bg-overlay-course"></div>
        </div>
            <div className={style.course}>
                <Image
                    src='/images/graphic-design.jpg'
                    width={450}
                    height={300}
                    alt='Graphic design course'
                />
            <div className='center-btn high-Zindex'>
                <h2 className="tertiary-header t-center no-margin white">
                   Graphic Design
                </h2>
                <Button cName='btn blog_btn inline-block no-margin' link='/graphicDesignCareer'>Know More</Button>
            </div>
            <div className="bg-overlay-course"></div>
        </div>
        <div className={style.course}>
                <Image
                    src='/images/ui-ux-design.jpg'
                    width={450}
                    height={300}
                    alt='UI/UX Design course'
                />
            <div className='center-btn high-Zindex'>
                <h2 className="tertiary-header t-center no-margin white">
                    UI/UX Design
                </h2>
                <Button cName='btn blog_btn inline-block no-margin' link='/uIUXDesign'>Know More</Button>
            </div>
            <div className="bg-overlay-course"></div>
        </div>
    </div>
    </>
  )
}
