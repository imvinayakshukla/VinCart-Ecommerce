import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default function Navbar() {
  const [navmenu, setNavmenu] = useState(true);
  const toggleMenu = () => {
    if (navmenu == true)
      setNavmenu(false)
    else
    setNavmenu(true)
  }
  return (
    <>
      <nav className='Navbar  bg-white justify-between flex lg:flex-row  m-6 items-center lg:justify-between'>
        {/* ****Logo***** */}
        <div className='logo mx-4 '>
          <img src='/images/transparent.png' alt='logo' width={200} />
        </div>
        {/* ****Menu Category***** */}
        <div className='lg:hidden cursor-pointer  ' onClick={toggleMenu} >
          {navmenu ? <MenuIcon /> : <CloseIcon />}
        </div>

        <div className=' items-center space-x-48 lg:flex hidden'>
          <div className='menu   mx-5  '>
            <ul className='flex space-x-7 '>
              <li className='cursor-pointer hover:text-red-500'>Home</li>
              <li className='cursor-pointer hover:text-red-500'>Category</li>
              <div className="relative cursor-pointer hover:text-red-500 inline-flex items-center">
                Latest
                <div className="absolute  inline-flex items-center justify-center w-8 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3.5 -right-6">Hot</div>
              </div>
              <li className='cursor-pointer hover:text-red-500'>About</li>
              <li className='cursor-pointer hover:text-red-500'>Contact</li>
            </ul>
          </div>


          <div className='sign-in-search flex space-x-6 items-center'>
            {/* *******Search Box*********** */}
            <div className="w-full md:w-auto">
              <div className="relative w-full">
                <input type="search" id="search-dropdown" className="rounded-2xl block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg  shadow-2xl  focus:ring-blue-500 focus:border-blue-500" placeholder="Search " required />
                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white  rounded-r-lg border   focus:ring-4 focus:outline-none">
                  <img src='/images/search-icon.svg' width={20} />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
            {/* *******Cart Icon*********** */}
            <div className="relative">
              <div className="relative cursor-pointer hover:text-red-500 inline-flex items-center">
                <ShoppingCartIcon />
                <div className="absolute  inline-flex items-center justify-center w-8 h-6 text-xs font-bold text-white bg-blue-400 border-2 border-white rounded-full -top-3.5 -right-6">2</div>
              </div>
            </div>
            {/* ******Sign In Button*********** */}
            <div>
              <button type="button" className="text-white bg-gradient-to-r my-1 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign in</button>
            </div>
          </div>
        </div>
      </nav>


    </>
  )
}