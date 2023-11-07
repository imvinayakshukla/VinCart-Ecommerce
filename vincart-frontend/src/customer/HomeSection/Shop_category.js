import React from 'react'
import Demo_categories from './Demo_categories'



export default function Shop_category() {
    return (
        <>

            <div className='mt-5 mb-8 text-2xl'>
                Shop By Category
            </div>

            <div className='flex relative lg:flex-row lg:space-y-0 space-y-7 flex-col lg:space-x-3 m-7  '>
                {Demo_categories.map((item) =>{
                    const words=item.text.split(' ')
                    console.log(words);
                
                    return (
                    <div className='lg:w-[30vw] '>

                        <img src={item.image} className='rounded-3xl ' />
                        <span className=' absolute top-10 mx-2 text-2xl font-bold'>{item.text}</span>
                        <button className=" absolute top-28 mx-9  bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            <i> Shop Now </i>
                        </button>

                    </div>

                );
                     } )}
            </div>

        </>
    )
}
