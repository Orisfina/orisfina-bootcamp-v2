import React from 'react'
import Image from 'next/image';
import Button from './Button';
import ProjectImg1 from '../public/images/project.jpg'
import ProjectImg2 from '../public/images/project2.jpg'
import ProjectImg3 from '../public/images/project3.jpg' 
//    import projects from '../projects'

  // type projectProps = {
  //   id: number;
  //   projectImg: {StaticImageData:string};
  //   projectDesc: string;
  //   projectLink: string;
  // }[]

  function ProjectBox() {
        return(
            <>
              <div className="grid3 a-i-center">
                <div className='project-box' key='1'>
                  <Image className='project-box__img' src={ProjectImg1} alt='A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL' />
                  <p className=' project-box__desc'>A simple website demonstrating the power of background attachment property - begineer Level</p>
                  <Button link='/#' cName='btn__link btn__link__red' >Read More
                  </Button>
                </div>
                <div className='project-box' key='2'>
                  <Image className='project-box__img' src={ProjectImg2} alt='A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL' />
                  <p className=' project-box__desc'>A simple website demonstrating the power of background attachment property - begineer Level</p>
                  <Button link='/#' cName='btn__link btn__link__red' >Read More         
                  </Button>
                </div>
                <div className='project-box' key='3'>
                  <Image className='project-box__img' src={ProjectImg3} alt='A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL' />
                  <p className=' project-box__desc'>A simple website demonstrating the power of background attachment property - begineer Level</p>
                  <Button link='/#' cName='btn__link btn__link__red' >Read More
                  </Button>
                </div>
              </div>
            </>
  )
}

export default ProjectBox
