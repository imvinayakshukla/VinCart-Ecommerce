import React from 'react'

export default function footer() {
  return (
    <footer className='m-16 w-full   '>
      <div className='justify-start items-start  flex lg:flex-row lg:space-x-36 space-y-6 flex-col'>
    <div className='flex flex-col text-left space-y-10 lg:w-1/5 w-1/2  '>
      
        <img src='/images/logo/black.png' alt="logo" width={200}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
    </div>

    <div className='flex flex-col -mt-1 text-start '>
      <h1 className='text-xl font-bold leading-10'>Quick Links</h1>
      <ul className='flex flex-col space-y-3 '>
        <li className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-1'>About</li>
        <li className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-1'>Offers & Discounts</li>
        <li className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-1'>Get Coupon</li>
        <li className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-1'>Contact Us</li>
      </ul>
    </div>

    <div className='flex flex-col  -mt-1 text-start'>
      <h1 className='text-xl font-bold leading-10'>New Products</h1>
      <ul className='flex flex-col space-y-3 '>
        <li className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-1'>Woman Cloth</li>
        <li className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-1'>Fashion Accessories</li>
        <li className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-1'>Man Accessories</li>
        <li className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-1'>Rubber made Toys</li>
      </ul>
    </div>

    <div className='flex flex-col  lg:mx-0 -mt-1 text-start'>
      <h1 className='text-xl font-bold leading-10'>Support</h1>
      <ul className='flex flex-col space-y-3  '>
        <li className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-1'>Frequently Asked Questions</li>
        <li className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-1'>Terms & Conditions</li>
        <li className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-1'>Privacy Policy</li>
        <li className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-1'>Report a Payment Issue</li>
      </ul>
    </div>
    </div>

    <div className='flex mt-10'>
  <h1 >  Copyright ©2023 All rights reserved |<span className='hover:text-blue-300 cursor-pointer transition duration-500 ease-in-out  transform hover:translate-x-6'><a href='https://www.linkedin.com/in/imvinayakshukla/' target='_blank'> Vinayak Shukla</a></span></h1>
    </div>

    
</footer>
  )
}
