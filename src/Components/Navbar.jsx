import 'react'
import logo from "../assets/icons/logo.png";
import searchIcon from "../assets/icons/search.png";
import userIcon from "../assets/icons/user.png";
import cartIcon from "../assets/icons/cart.png";
export default function Navbar() {
  return (
    <div className= 'w-full h-[12vh] flex'>
        <div className='w-[25%] h-full flex items-center justify-center'>
            <img src={logo} alt="Logo" className='h-[80%]' />
        </div>
        <div className='w-[50%] h-full flex items-center justify-center'>
            <div className='w-[90%] h-[50%] bg-[#F0F5FA] rounded-md flex items-center px-4'>
              <img src={searchIcon} alt="Search" className='h-[40%]' />
            <input type="text" placeholder='Search for products, brands and more' className='w-[80%] h-[50%] rounded-md px-4 text-lg outline-none' />
            </div>
        </div>
        <div className='w-[25%] h-full flex items-center justify-end px-3.75  gap-2'>
        <div className='px-10 h-20 flex items-center  gap-2 transition-all duration-300 hover:bg-[#F0F5FA] rounded-md cursor-pointer'>
           
              <img src={userIcon} alt="User" className='h-[20%]' />
              <span className='text-sm font-medium'>Login</span>
            </div>
            <div className='flex items-center gap-2 cursor-pointer px-10 h-20 transition-all duration-300 hover:bg-[#F0F5FA] rounded-md '>
              <img src={cartIcon} alt="Cart" className='h-[20%]' />
              <span className='text-sm font-medium'>Cart</span>
            </div>

        </div>
        
    </div>
  )
}
