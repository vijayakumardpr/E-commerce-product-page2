import React, { useState } from 'react'
import product1 from "../assets/images/image-product-1.jpg"
import product2 from "../assets/images/image-product-2.jpg"
import product3 from "../assets/images/image-product-3.jpg"
import product4 from "../assets/images/image-product-4.jpg"
import previousArrow from "../assets/images/icon-previous.svg"
import nextArrow from "../assets/images/icon-next.svg"
import product1Thumb from "../assets/images/image-product-1-thumbnail.jpg"
import product2Thumb from "../assets/images/image-product-2-thumbnail.jpg"
import product3Thumb from "../assets/images/image-product-3-thumbnail.jpg"
import product4Thumb from "../assets/images/image-product-4-thumbnail.jpg"
import { useDispatch } from 'react-redux'
import { close } from '../utils/carouselSlice'

const images = [
    { image: product1 },
    { image: product2 },
    { image: product3 },
    { image: product4 },
]


const Carousel = () => {
    const [count, setCount] = useState(0)

    const dispatch = useDispatch()

    function forward() {
        if (count === 3) {
            setCount(-1)
        }
        setCount(prevCount => prevCount + 1)
    }
    function backwards() {
        if (count === 0) {
            setCount(3)
        }
        setCount(prevCount => prevCount - 1)
    }

    function swap(id) {
        setCount(id)
    }

    function closes() {
        dispatch(close())
    }


    return (
        <div className="relative md:flex flex-col gap-5">
            <button onClick={closes} className="hidden md:flex justify-end px-3 text-2xl md:font-bold text-orange-400 cursor-pointer">X</button>
            <img className="h-80 w-full md:w-[450px] md:h-[450px] md:rounded-3xl" src={images[count].image} alt="" />
            <div className="flex justify-between w-full absolute top-[50%] px-5 md:top-[40%]">
                <div onClick={backwards} className="bg-white px-4 py-3 rounded-full flex justify-center items-center">
                    <img className="w-3 cursor-pointer" src={previousArrow} alt="prev" />
                </div>
                <div onClick={forward} className="bg-white px-4 py-3 rounded-full flex justify-center items-center">
                    <img className="w-3 cursor-pointer" src={nextArrow} alt="next" />
                </div>
            </div>
            <div className="hidden md:flex md:justify-center">
                <div className='flex gap-7'>
                    <img onClick={() => swap(0)} className={count === 0 ? "border-2 border-orange-500 rounded-xl w-[80px] h-[80px] cursor-pointer" : "rounded-xl w-[80px] h-[80px] cursor-pointer"} src={product1Thumb} alt="" />
                    <img onClick={() => swap(1)} className={count === 1 ? "border-2 border-orange-500 rounded-xl w-[80px] h-[80px] cursor-pointer" : "rounded-xl w-[80px] h-[80px] cursor-pointer"} src={product2Thumb} alt="" />
                    <img onClick={() => swap(2)} className={count === 2 ? "border-2 border-orange-500 rounded-xl w-[80px] h-[80px] cursor-pointer" : "rounded-xl w-[80px] h-[80px] cursor-pointer"} src={product3Thumb} alt="" />
                    <img onClick={() => swap(3)} className={count === 3 ? "border-2 border-orange-500 rounded-xl w-[80px] h-[80px] cursor-pointer" : "rounded-xl w-[80px] h-[80px] cursor-pointer"} src={product4Thumb} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Carousel