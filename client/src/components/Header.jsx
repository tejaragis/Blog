import React from 'react'
import {Navbar, TextInput,Button} from 'flowbite-react'
import {Link,useLocation} from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';
import { IoMoonSharp } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";

export default function Header() {
  const path=useLocation().pathname;
  
  return (
   <Navbar className='border-b-2'> 
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r  from-indigo-500 to-teal-400 rounded-lg text-white'>Sahand's</span>
            Blog
        </Link>
        <form action="">
          <TextInput type='text' placeholder='search...' rightIcon={AiOutlineSearch} className='hidden lg:inline'/>

        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill >
          <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
          
          <Button pill className='w-12 h-10 '>
                        <IoSunnySharp />
          </Button>
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue'  color='gray' pill outline>Sign In</Button>
          </Link>
          <Navbar.Toggle/>

        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path ==='/'} as={'div'}>
              <Link to="/" >
                   Home
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path ==='/about'} as={'div'}>
              <Link to="/about">
                   About
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path ==='/projects'} as={'div'}>
              <Link to="/projects">
                   Porjects
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
    </Navbar>
  
  )
}
