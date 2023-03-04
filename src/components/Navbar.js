import React from 'react'
import { FiMenu } from 'react-icons/fi';

import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
        {/* left side */}
        <div className='flex items-center shrink-0 p-5 pt-4'>
            <FiMenu className="w-8 h-8" />
            <div className=''><img src={logo} alt="" className='w-36' /></div>
        </div>
        {/* middle */}
        <div className=''>
            
        </div>
        {/* right */}
    </div>
  )
}

export default Navbar