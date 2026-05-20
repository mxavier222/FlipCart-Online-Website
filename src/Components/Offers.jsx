import 'react'
import o1 from '../assets/offers/1.webp'
import o2 from '../assets/offers/2.webp'
import o3 from '../assets/offers/3.webp'
import o4 from '../assets/offers/4.webp'
import o5 from '../assets/offers/5.webp'
import o6 from '../assets/offers/6.webp'        

export const Offers = () => {
    let offerArr = [o1,o2,o3,o4,o5,o6]
    
  return (
    <div className='w-full p-4 bg-[#f1f2f4]'>
         
          <h2 className='text-2xl font-bold px-2.5 mb-4'>
                Today's Deal
            </h2>
            <div className='w-full h-full bg-white flex gap-2.5 p-2.5'>
        <div className='w-full h-auto flex flex-wrap gap-2.5 p-2.5'>
            
            {offerArr.map((offer, index) => (
                
                <div key={index} className='w-[32%] h-auto'>
                    <img src={offer} alt={`Offer ${index + 1}`} className='w-full  object-cover' />
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}
