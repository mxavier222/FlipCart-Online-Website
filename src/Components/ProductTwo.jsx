import 'react'
import p1 from '../assets/Products/1.webp'
import p2 from '../assets/Products/2.webp'
import p3 from '../assets/Products/3.webp'    
import p4 from '../assets/Products/4.webp'
import p5 from '../assets/Products/5.webp'
import p6 from '../assets/Products/6.webp'
import p7 from '../assets/Products/7.webp'
import p8 from '../assets/Products/8.webp'
import p9 from '../assets/Products/9.webp'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let products = [
    {
        id:1,
        name : "Samsung Galaxy A16",
        price : "35,000",
        img : p1
    },
    {
        id:2,
        name : "POCO C16",
        price : "10,000",
        img : p2
    },
    {
        id:3,
        name : "Apple Iphone 15",
        price :"60,000" ,
        img : p3
    },
    {
        id:4,
        name : "iQOO Neo9 Pro 5G",
        price : "31,998",
        img : p4
    },
    {
        id:5,
        name : "Tecno POP %G",
        price : "11,999",
        img : p5
    },
    {
        id:6,
        name : "realme NARZO N16",
        price : "8,498",
        img : p6
    },
    {
        id:7,
        name : "Redmi A4 5G",
        price : "8,999",
        img : p7
    },
    {
        id:8,
        name : "Motorola G45 5G",
        price : "11,697",
        img : p8
    },
    {
        id:9,
        name : "iQOO Z9s 5G",
        price : "21,999",
        img : p9
    },

]

export const ProductTwo = ({  title }) => {

  return (
    <div className="w-full p-4  bg-[#f1f2f4]">
     <h1 className="text-xl font-bold mb-6">{title}</h1>
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
       {products.map((product) => {
        return(  <SwiperSlide>
            
            <div key={product.id} className="w-27  flex flex-col items-center m-1 p-2 ">
              <img src={product.img} alt={product.name} className=" p-4 m-1]:" />
              <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
              <p className="text-xs font-bold text-green-600">₹{product.price}</p>
            </div> </SwiperSlide>)
          })}
     
      ...
    </Swiper>
     </div>
        
    </div>
  )
}
