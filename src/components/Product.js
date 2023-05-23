import React from 'react'
import cart from "../assets/images/icon-cart.svg"
import plus from "../assets/images/icon-plus.svg"
import minus from "../assets/images/icon-minus.svg"
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, intoCart } from '../utils/cartSlice'

const Product = () => {
    const count = useSelector(store => store.cart.count)
    const dispatch = useDispatch()

    function addProduct() {
        dispatch(increment())
    }

    function removeProduct() {
        dispatch(decrement())
    }

    function toCart() {
        dispatch(intoCart())
    }
    return (
        <div className='m-5 flex flex-col gap-3 md:w-[450px] md:gap-6'>
            <div className='text-xs font-bold tracking-widest text-orange-400 md:text-sm'>SNEAKER COMPANY</div>
            <div className='text-3xl font-bold md:text-5xl'>
                <div>Fall Limited Edition</div>
                <div>Sneakers</div>
            </div>
            <div className='text-gray-400 text-base font-base'>
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they'll withstand everything together
                the weather can offer.
            </div>
            <div className='flex justify-between py-3 md:flex-col'>
                <div className='flex justify-center items-center md:justify-start'>
                    <div className='text-3xl font-bold'>$125.00</div>
                    <div className='ml-2 px-2 bg-orange-100 text-orange-600 font-bold rounded-md'>50%</div>
                </div>
                <div className='text-lg font-bold text-gray-300 line-through'>$250.00</div>
            </div>
            <div className='flex flex-col gap-3 md:flex-row'>
                <div className='bg-blue-50 flex justify-between items-center p-4 rounded-lg md:w-1/3'>
                    <img className="cursor-pointer" onClick={removeProduct} src={minus} alt="" />
                    <div className='font-bold text-base'>{count}</div>
                    <img className="cursor-pointer" onClick={addProduct} src={plus} alt="" />
                </div>
                <div onClick={toCart} className='bg-[#ff8000] cursor-pointer text-white flex justify-center items-center p-4 rounded-lg shadow-xl md:flex-grow'>
                    <img className='h-4' src={cart} alt="" />
                    <div className='ml-3 font-semibold'>Add to cart</div>
                </div>
            </div>
        </div>
    )
}

export default Product