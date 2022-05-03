import Image from 'next/image'
import Button from '../components/Button';
import SlideshowShort from '../components/SlideshowShort';
import frontend from '../public/images/suprise.png'
import backend from '../public/images/backend-girl.png'
import type { NextPage } from 'next';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const WebDevelopment: NextPage = () => {
    return (
        <>
        <NavBar />
           <SlideshowShort title='WEB DESIGN'  color1='FRONTEND' color2='BACKEND' text1='AND' text2='TRAINING AVAILABLE' />
           <main className='container-large'>
           <h2 className='t-center pb-s pt-m course_heading2 main-color'>
           Choose between becoming a Frontend Web Developer , Backend Developer or a Full Stack Developer
            </h2>
        <h2 className='subHeading'>What is the Frontend Developer role ?</h2>
        <p className='pt-s'>
            Front-end developers are in charge of creating 
            dynamic websites using a programming language. 
            They take care of the front-end part, i.e. the visual side of the site, unlike the back-end developer. 
        </p>
        <Image src={frontend} alt='what is frontend web developer role?' className='frontend-img mt-s mb-l' />
        <h3 className='pb-s'>A front-end developer’s missions typically entails:</h3>
        <ul className='mb-s'>
            <li>- Understanding the project they’re working on to develop the most satisfying features and interfaces for their client.
            </li>
            <li>
                 - Implementing mockups with a keen eye for detail and rigorous standards.
            </li>
            <li>
                - Using best practices to structure HTML, CSS and Javascript code.
            </li>
            <li>
                 - Using frameworks such as React to build powerful and modular applications.
            </li>
            <li>
                - Using tests to monitor their applications and ensure the highest quality service.
            </li>
            <li> 
               - Providing technical and functional documentation of the site for their clients and colleagues.
            </li>
            <li>- Optimizing page load time.</li>
        </ul>
        <Button link='/register' cName='course_btn p-xy mr-s'>Apply Now! </Button>
         <Button link='/blog/frontend-web-development-career' cName='course_btn p-xy '>MORE ABOUT  FRONTEND ROLE</Button>
    
        <h2 className='subHeading mt-l'>What is the Back-End Developer role ?</h2>
        <p className='pt-s'>
            Back-end developers are in charge of creating 
            dynamic websites using a programming language. 
            They take care of the front-end part, i.e. the visual
            side of the site, unlike the back-end developer.
        </p>
        <Image src={backend} alt='What is the Back-End Developer role ' className='backend-img mt-s mb-l' />

        <h3 className='pb-s'>A Back-end developer’s missions typically entails:</h3>
        <ul className='mb-s'>
            <li>- Understanding the project they’re working on to develop the most satisfying features and interfaces for their client.
            </li>
            <li>
                 - Implementing mockups with a keen eye for detail and rigorous standards.
            </li>
            <li>
                - Using best practices to structure HTML, CSS and Javascript code.
            </li>
            <li>
                 - Using frameworks such as React to build powerful and modular applications.
            </li>
            <li>
                - Using tests to monitor their applications and ensure the highest quality service.
            </li>
            <li> 
               - Providing technical and functional documentation of the site for their clients and colleagues.
            </li>
            <li>- Optimizing page load time.</li>
        </ul>
            <Button link='/register' cName='course_btn p-xy mr-s'>Apply Now! </Button>
            <Button link='/blog/backend-web-development-career' cName='course_btn p-xy '>MORE ABOUT  BACKEND ROLE</Button>
        </main>
        <Footer />
        </>
    )
}

export default WebDevelopment;
