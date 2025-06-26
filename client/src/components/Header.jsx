import React from 'react'
import {Navbar, TextInput,Button} from 'flowbite-react'
import {Link} from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';
export default function Header() {
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
    </Navbar>
  
  )
}
