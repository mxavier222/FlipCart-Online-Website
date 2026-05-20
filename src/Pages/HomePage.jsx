import 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import { Banner } from '../Components/Banner'
import { Products } from '../Components/Products'
import { ProductTwo } from '../Components/ProductTwo'
import { Fragment } from 'react'

import p10 from '../assets/Products/10.jpg'
import p11 from '../assets/Products/11.webp'
import p12 from '../assets/Products/15.jpg' 
import p13 from '../assets/Products/16.webp'
import p14 from '../assets/Products/9.webp'
import p15 from '../assets/Products/13.jpg'
import p16 from '../assets/Products/12.webp'
import p17 from '../assets/Products/17.webp'
import p18 from '../assets/Products/18.webp'
import { Offers } from '../Components/Offers'
import { Footer } from '../Components/Footer'

let offerArr = [
    {
        id:1,
        name : "Medium Tote Bag",
        price : "399",
        img : p10
    }, 
    {
        id:2,
        name : "Godrej 7 Kg ",
        price : "9,999",
        img : p11
    }, 
    {
        id:3,
        name : "Godrej 1 Ton AC",
        price : "28,990",
        img : p12
    }, 
    {
        id:4,
        name : "DOCTOR EXTRA SOFT",
        price : "398",
        img : p13
    }, 
    {
        id:5,
        name : "Sonata Watch",
        price : "749",
        img : p14
    }, 
    {
        id:6,
        name : "Fastrack Limitless Fs2 Pro",
        price : "3,800",
        img : p15
    }, 
    {
        id:7,
        name : "Presto Naphthalene Balls",
        price : "380",
        img : p16
    }, 
    {
        id:8,
        name : "Solimo 12-Inch Clock",
        price : "599",
        img : p17
    }, 
    {
        id:9,
        name : "FUNTEREST Wall Decor",
        price : "699",
        img : p18
    }, 
   
    
]
export const HomePage = () => {
  return (
    <Fragment>
       <Navbar />
       <Categories />
       <Banner />
       <Products data={offerArr} title={"Widest Collection"} />
       <ProductTwo title={"Popular Mobiles"}  />    
       <Offers title={"Today's Deals"} />
       <Footer />
    </Fragment> 
  )
}
