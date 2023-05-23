import React from 'react'
import Carousel from './Carousel'
import { useSelector } from 'react-redux'

const ModalCarousel = () => {
    const isTrue = useSelector(store => store.carousel.isTrue)

    if (!isTrue) return null
    return (
        <div className='hidden md:block bg-[rgba(0,0,0,0.7)] absolute w-full h-full'>

            <div className='flex justify-center relative top-[100px]'>
                <Carousel />
            </div>
        </div>
    )
}

export default ModalCarousel