import React, { useState } from 'react'
import product1 from "../assets/images/image-product-1.jpg"
import product2 from "../assets/images/image-product-2.jpg"
import product3 from "../assets/images/image-product-3.jpg"
import product4 from "../assets/images/image-product-4.jpg"
import product1Thumb from "../assets/images/image-product-1-thumbnail.jpg"
import product2Thumb from "../assets/images/image-product-2-thumbnail.jpg"
import product3Thumb from "../assets/images/image-product-3-thumbnail.jpg"
import product4Thumb from "../assets/images/image-product-4-thumbnail.jpg"
import { useDispatch } from 'react-redux'
import { open } from '../utils/carouselSlice'


const images = [
    { id: 1, image: product1 },
    { id: 2, image: product2 },
    { id: 3, image: product3 },
    { id: 4, image: product4 },
]
const ImageViewer = () => {
    const [count, setCount] = useState(0)

    function swap(id) {
        setCount(id)
    }

    const dispatch = useDispatch()

    function modal() {
        dispatch(open())
    }


    return (
        <div className="flex flex-col gap-5 md:w-[450px]">
            <img onClick={modal} className="w-[400px] h-[400px] rounded-2xl" src={images[count].image} alt="" />
            <div className='flex gap-7'>
                <img onClick={() => swap(0)} className={count === 0 ? "border-2 border-orange-500 rounded-xl w-[80px] h-[80px] cursor-pointer" : "rounded-xl w-[80px] h-[80px] cursor-pointer"} src={product1Thumb} alt="" />
                <img onClick={() => swap(1)} className={count === 1 ? "border-2 border-orange-500 rounded-xl w-[80px] h-[80px] cursor-pointer" : "rounded-xl w-[80px] h-[80px] cursor-pointer"} src={product2Thumb} alt="" />
                <img onClick={() => swap(2)} className={count === 2 ? "border-2 border-orange-500 rounded-xl w-[80px] h-[80px] cursor-pointer" : "rounded-xl w-[80px] h-[80px] cursor-pointer"} src={product3Thumb} alt="" />
                <img onClick={() => swap(3)} className={count === 3 ? "border-2 border-orange-500 rounded-xl w-[80px] h-[80px] cursor-pointer" : "rounded-xl w-[80px] h-[80px] cursor-pointer"} src={product4Thumb} alt="" />
            </div>

        </div>
    )
}

export default ImageViewer