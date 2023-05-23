import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import product from "../assets/images/image-product-1-thumbnail.jpg"
import deleteIcon from "../assets/images/icon-delete.svg"
import { clear } from '../utils/cartSlice'


const Cart = () => {

    const isTrue = useSelector(store => store.cart.isShow)
    const count = useSelector(store => store.cart.count)
    const visible = useSelector(store => store.cart.intoCart)

    const dispatch = useDispatch()

    function clearAll() {
        dispatch(clear())
    }

    if (!isTrue) return null
    return (
        <div className='bg-white h-64 m-2 w-[95%] rounded-xl fixed top-[4rem] overflow-hidden shadow-2xl md:w-96 md:right-60'>
            <div className='p-5 border-b-2 border-gray-200 font-bold'>Cart</div>
            <div className='overflow-scroll h-full p-4'>
                {
                    count > 0 && visible ?
                        <div className='flex flex-col p-2 gap-5'>
                            <div className='flex items-center justify-between'>
                                <img className="w-16 rounded-xl" src={product} alt="" />
                                <div>
                                    <div>Fall Limited Edition Sneakers</div>
                                    <div className='text-lg'>$125.00 x {count} <span className='font-bold'>${125 * count}.00</span></div>
                                </div>
                                <img onClick={clearAll} src={deleteIcon} alt="delete" />
                            </div>
                            <button className='bg-orange-400 text-white rounded-lg p-4 font-semibold'>Checkout</button>
                        </div>
                        :
                        <div className='text-center mt-10'>Your cart is empty</div>
                }
            </div>
        </div >
    )
}

export default Cart