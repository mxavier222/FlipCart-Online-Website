import 'react'
import b1 from '../assets/Banner/1.webp'
import b2 from '../assets/Banner/2.webp'
import b3 from '../assets/Banner/3.webp'
import b4 from '../assets/Banner/4.webp'
import b5 from '../assets/Banner/5.webp'
// import Swiper core and required modules
import {  Pagination,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Banner = () => {
    let bannerArr = [b1,b2,b3,b4,b5]
  return (
    <div>
         <Swiper
      // install Swiper modules
      modules={[ Pagination,  A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {bannerArr.map((img)=>{
            return (<SwiperSlide>
                 <div className='w-full'>
      <img src={img} alt="Banner" />
    </div>
            </SwiperSlide>)
        })}
     
    </Swiper>
       
    </div>
  );
}
