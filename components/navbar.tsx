import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/nddc-logo.svg'
import MenuIconBlack from '@/public/assets/icons/menu-icon-black'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
        <Image src={logo} alt='The NDDC Logo'/>

        <div className='flex items-center gap-2 cursor-pointer'>
            <p className='text-[#1E1E1E] text-2xl font-normal font-times'>MENU</p>
            <MenuIconBlack />
        </div>
    </nav>
  )
}

export default Navbar