import 'react'

// import Swiper core and required modules
import {  A11y, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




export const Products = ({ data, title }) => {

  return (
    <div className="w-full p-4 bg-[#f1f2f4]">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div className='w-full h-full bg-white flex gap-2.5 p-2.5'>
     
         <Swiper
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       {data.map((product) => {
        return(  <SwiperSlide>
            
            <div key={product.id} className="w-27  flex flex-col items-center m-1 p-2 ">
              <img src={product.img} alt={product.name} className=" p-4 m-1]:" />
              <h2 className="text-sm font-semibold mt-4">{product.name}</h2>
              <p className="text-xs font-bold text-green-600">₹{product.price}</p>
            </div> </SwiperSlide>)
          })}
     
      ...
    </Swiper>
     
        
    </div>
    </div>
  )
}
