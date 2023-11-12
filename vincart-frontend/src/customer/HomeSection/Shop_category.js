import React from 'react'
import Demo_categories from './Demo_categories'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import Carousel from './Carousel';


export default function Shop_category() {
    return (
        <>
            <Carousel/>
            <div className='mt-5 mb-8 text-3xl font-semibold'>
                Shop By <span className='text-yellow-500 hover:text-yellow-300'>Category</span>
            </div>

            <div className=' flex relative lg:flex-row lg:space-y-0 space-y-7 flex-col lg:space-x-3 m-7  '>
                {Demo_categories.map((item) => {



                    return (
                        <div className='lg:w-[30vw]  '>

                            <img src={item.image} className='rounded-3xl ' />
                            <span className=' absolute lg:top-10 -my-44 lg:my-0 lg:-mx-1 mx-4 text-2xl font-bold'>{item.text}</span>
                            <button className=" absolute -my-24 lg:my-0   lg:top-28 mx-9  bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-full">
                                <i> Shop Now </i>
                            </button>

                        </div>

                    );
                })}
            </div>

            <div className='justify-center flex flex-col  bg-yellow-50 m-4  rounded-3xl w-ful h-[55vh] my-28 relative'>
                <div className='absolute '>
                    <img src='/images/card-man.png.webp' alt='card-man ' className='w-40 mx-48 -top-12' />
                </div>
                <div className='text-5xl font-bold flex flex-col  leading-10'>
                    <span className=' relative -right-14'> Find The Best Product</span>  <br /> <span className='relative -right-14'>from Our <span className='text-yellow-500 hover:text-yellow-300'>Shop</span> </span>
                    <button className="   text-lg  w-[140px] mx-[40rem] mt-5    bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-full">
                        <i> Shop Now </i>
                    </button>
                </div>
                <div>
                    <img src='/images/card-shape.png.webp' alt='cloth' className='mx-[70rem]'/>
                </div>

            </div>

            <div className='flex lg:flex-row flex-col  space-x-6 m-4 h-full  '>
                <div className='  flex flex-col justify-center items-center space-y-5 ' >
                   <LocalShippingIcon  style={{ fontSize: 40 }}/>
                    <h1 className='font-bold text-xl '>Free Shipping Method</h1>
                    <p >aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-5 '>
                   <span></span> <LockIcon style={{ fontSize: 40 }}/>
                    <h1 className='font-bold text-xl'>Secure Payment System</h1>
                    <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>

                <div className='  flex flex-col justify-center items-center space-y-5 '>
                   <span></span> <SyncLockIcon style={{ fontSize: 40 }}/>
                    <h1 className='font-bold text-xl'>Secure Payment System</h1>
                    <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
            </div>


            <div className='flex w-screen mx-10' > 
               
                 <img src='/images/gallery/1.webp ' alt="img1" width={320} />
                 
                 
                <img src='/images/gallery/2.webp' alt="img1"  width={320} className='-mx-[70px]' />
                <img src='/images/gallery/3.webp' alt="img1" width={320} className='-mx-[20px]'/>
                <img src='/images/gallery/4.webp' alt="img1" width={320} className='-mx-[20px]'/>
                <img src='/images/gallery/5.webp' alt="img1" width={320} className='-mx-[50px]'/>
                </div>
            

        </>
    )
}
