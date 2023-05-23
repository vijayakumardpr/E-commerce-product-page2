import React from 'react'
import Carousel from './Carousel'
import Product from './Product'
import SideNavbar from './SideNavbar'
import Cart from './Cart'
import ImageViewer from './ImageViewer'
import ModalCarousel from './ModalCarousel'

const Main = () => {
    return (
        <>
            <div className='md:hidden'> <Carousel /></div>
            <div className='md:flex items-center md:w-[70%] md:m-16 md:my-24 '>
                <div className='hidden md:flex w-3/5 justify-center'><ImageViewer /></div>
                <div className='md:w-3/5 flex justify-center '><Product /></div>
            </div>
            <SideNavbar />
            <Cart />
            <ModalCarousel />
        </>
    )
}

export default Main