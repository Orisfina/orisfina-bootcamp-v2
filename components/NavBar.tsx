import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../public/images/logo-small.svg';

const NavBar = () => {
    const [isActive, setActive] = useState(false);
     ;
     
     const removeToggle = ()=>{
      setActive(isActive)
     }

     const handleToggle = () => {
      setActive(!isActive)
    };

    return (
        <>
    <div className="nav-wrapper">
  <nav className="navbar">
     <Image src={logoImg} alt="Company Logo" className='logo'/> 
     <div className="menu-toggle" id="mobile-menu" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
     </div>
    <ul className={isActive ? 'nav no-search active-navbar' : 'nav no-search'}>
          {/* <Link href="/" activeClassName="selected" className='nav-item t-right'>
                Home
          </Link> */}
          <Link href="/">
                <a className='nav-item t-right'>Home</a>
          </Link>
          <Link href="/courses">
               <a onClick={removeToggle} className='nav-item t-center' >Courses </a>
          </Link>
          <Link href="/testimonial" >
            <a className='nav-item' >Testimonial</a>
          </Link>
          <Link href="/about" >
              <a className='nav-item t-center'>About Us</a> 
        </Link>
          <Link href="/blog">
                <a className='nav-item'>Blog</a> 
          </Link>
    </ul>
   </nav>
   {/* <div className="grad-bar"></div> */}
  </div>
        </>
    )
}

export default NavBar