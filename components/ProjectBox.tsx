import React from 'react'
import Image from 'next/image';
import Button from './Button';
import ProjectImg1 from '../public/images/project.jpg'
import ProjectImg2 from '../public/images/cryto-app.jpg'
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
                  <p className=' project-box__desc'>A website created using HTML5, CSS3 & Javascript - Begineer Level</p>
                  {/* <Button link='/#' cName='btn__link btn__link__red' >Read More
                  </Button> */}
                </div>
                <div className='project-box' key='2'>
                  <Image className='project-box__img' src={ProjectImg2} alt='A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL' />
                  <p className=' project-box__desc'>A Cryptocurrency app fully built with ReactJs, MaterialUI, NodeJS and MongoDB - Advanced Level</p>
                  {/* <Button link='/#' cName='btn__link btn__link__red' >Read More         
                  </Button> */}
                </div>
                <div className='project-box' key='3'>
                  <Image className='project-box__img' src={ProjectImg3} alt='A SIMPLE WEBSITE DEMONSTRATING THE POWER OF BACKGROUND ATTACHMENT PROPERTY- BEGINNER LEVEL' />
                  <p className=' project-box__desc'>Want to get busy with NextJs and TailwindCSS? This project will guide you giving you all the basic concept needed to get started - Advanced Level</p>
                  {/* <Button link='/#' cName='btn__link btn__link__red' >Read More
                  </Button> */}
                </div>
              </div>
            </>
  )
}

export default ProjectBox
