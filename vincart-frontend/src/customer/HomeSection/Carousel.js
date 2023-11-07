import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import demo_carousel from './Demo_Carousel'

const items = demo_carousel.map((item) =>
    <div className='w-full lg:h-[45vh] mt-5 lg:mt-2 '>
        <img className='cursor-pointer lg:w-screen h-[100%]- ' src={item.image} /></div>)

const Carousel = () => (
    <AliceCarousel
        animationType="fadeout"
        animationDuration={800}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        items={items}
        disableDotsControls
        mouseTracking
       
    />
);

export default Carousel;