import React, { Fragment, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Transition, Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import Add_to_cart from './Add_to_cart';
import { Link } from 'react-router-dom';

import Signin from '../../User_Login/Signin';



export default function Navbar() {

  const [mobileNavsOpen, setMobileNavsOpen] = useState(false)
  const [CartOpen, setCartOpen] = useState(false)
  const [SigninOpen, setSigninOpen] = useState(false)


  const toggleCart = () => {
    console.log(CartOpen)
    setCartOpen(!CartOpen)



  }
  return (
    <nav className='Navbar font-bold    z-20 w-full  lg:bg-white lg:shadow-xl  flex lg:flex-row flex-col mt-4 p-2 items-center lg:justify-between'>

      {/* ****Logo and hamburger***** */}

      <div className='flex flex-row items-center justify-around  space-x-11'>
        <div className='logo mx-4 '>
          <Link to="/">
            <img src='/images/logo/black.png' alt='logo' width={200} /></Link>
        </div>
        {/* ****Menu Category***** */}

        <div className='lg:hidden cursor-pointer  ' onClick={() => setMobileNavsOpen(true)} >

          <MenuIcon />
        </div>
      </div>

      <div className=' items-center space-x-48 lg:flex hidden'>
        <div className='menu   mx-5  '>
          <ul className='flex space-x-7 '>
            <li className='cursor-pointer hover:text-red-500'><Link to="/">Home</Link> </li>
            <li className='cursor-pointer hover:text-red-500'><Link to="/productlist"> Category</Link></li>
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
          {CartOpen ? <Add_to_cart show={CartOpen} close={() => setCartOpen(false)} /> : <></>}
          <div className="relative" >

            <div onClick={toggleCart} className="relative cursor-pointer hover:text-red-500 inline-flex items-center">
              <ShoppingCartIcon />
              <div className="absolute  inline-flex items-center justify-center w-8 h-6 text-xs font-bold text-white bg-blue-400 border-2 border-white rounded-full -top-3.5 -right-6">2</div>
            </div>
          </div>
          {/* *****************Sign In Button***************** */}

          <div>

            <button onClick={() => setSigninOpen(true)} type="button" className="text-white bg-gradient-to-r my-1 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign in</button>
            {SigninOpen ? <Signin show={SigninOpen} close={() => setSigninOpen(false)} /> : <></>}
          </div>
        </div>
      </div>
      {/* ************Mobile View********** */}
      <Transition.Root show={mobileNavsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileNavsOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <div className='flex flex-row items-center justify-around  space-x-11'>
                    <div className='logo mx-4 '>
                      <img src='/images/logo/black.png' alt='logo' width={200} />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileNavsOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className={`space-y-9  text-center  justify-center flex-col  mt-5 items-center  lg:hidden flex `}>
                  <div className='menu  '>
                    <ul className='flex flex-col space-y-8 mt-6   '>
                      <li className='cursor-pointer hover:text-red-500'><Link to="/" onClick={() => setMobileNavsOpen(false)}  >Home</Link></li>
                      <li className='cursor-pointer hover:text-red-500'><Link to="/productlist" onClick={() => setMobileNavsOpen(false)} >Category</Link></li>
                      <div className="relative cursor-pointer hover:text-red-500  items-center">
                        Latest
                        <div className="absolute  inline-flex items-center justify-center w-6 h-4 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full top-0.5 -right-4">Hot</div>
                      </div>
                      <li className='cursor-pointer hover:text-red-500'>About</li>
                      <li className='cursor-pointer hover:text-red-500'>Contact</li>
                    </ul>
                  </div>


                  <div className='sign-in-search flex flex-col  items-center space-y-7'>
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
                    <div className="relative flex flex-col" onClick={toggleCart}>
                      <div className="relative cursor-pointer hover:text-red-500 inline-flex items-center" >
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

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

    </nav >



  )
}
